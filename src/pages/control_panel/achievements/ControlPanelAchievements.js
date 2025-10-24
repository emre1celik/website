import { useEffect, useState } from "react";

function ControlPanelAchievements() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      const token = localStorage.getItem("apiToken");
      try {
        const res = await fetch("https://api.myramu.online/api/achievements", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) setAchievements(data.achievements);
      } catch (err) {
        console.error("Error fetching achievements:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAchievements();
  }, []);

  async function claimReward(key) {
    const token = localStorage.getItem("apiToken");
    try {
      const res = await fetch(
        "https://api.myramu.online/api/achievements/claim",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ milestone_key: key }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setMessage({ type: "success", text: "✅ " + data.message });
        setAchievements((prev) =>
          prev.map((a) => (a.key === key ? { ...a, claimed: true } : a))
        );
      } else {
        setMessage({ type: "error", text: "❌ " + (data.error || "Failed") });
      }
    } catch (err) {
      setMessage({ type: "error", text: "❌ " + err.message });
    }
  }

  if (loading) return <p>Loading achievements...</p>;

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Rewards & Achievements</h3>
      {message && (
        <p
          className={`mb-4 ${
            message.type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message.text}
        </p>
      )}

      <ul className="space-y-3">
        {achievements.map((a) => (
          <li
            key={a.key}
            className={`p-3 rounded-xl border ${
              a.claimed
                ? "bg-green-100 border-green-300"
                : !a.unlocked
                ? "bg-gray-200 border-gray-400"
                : a.reached
                ? "bg-blue-100 border-blue-300"
                : "bg-gray-100 border-gray-200"
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{a.label}</p>
                <p className="text-sm text-gray-600">
                  {a.progress.toLocaleString()} / {a.required.toLocaleString()}
                </p>
                <p className="text-sm">Reward: {a.reward_ruud} Ruud</p>
              </div>
              {a.claimed ? (
                <span className="text-green-600 font-bold">Claimed</span>
              ) : a.reached && a.unlocked ? (
                <button
                  className="px-3 py-1 bg-blue-600 text-white rounded-md"
                  onClick={() => claimReward(a.key)}
                >
                  Claim
                </button>
              ) : (
                <span className="text-gray-400 text-sm">Locked</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ControlPanelAchievements;
