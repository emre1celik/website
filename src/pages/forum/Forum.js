import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";

import {
    ForumWrapper,
    ForumContent,
    ForumBox,
    CategoryCard,
    CategoryHeader,
    CategoryDescription,
    ThreadRow,
    ThreadTitle,
    ThreadAuthor,
    ButtonRow,
    ActionButton,
    ThreadRight,
    SectionDivider,
    NewThreadTextarea,
    ThreadActions,
    IconButton,
    PinnedIcon,
    NewThreadBox,
    NewThreadInput,
    NewThreadActions,
    ReplyBox,
    ReplyItem,
    ReplyActions,
    ReplyMeta,
} from "./ForumStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faPen,
    faThumbtack,
    faPlus,
    faEye,
} from "@fortawesome/free-solid-svg-icons";

/* ---------------- MOCK DATA ---------------- */

const MOCK_CATEGORIES = [
    {
        id: 1,
        name: "Announcements",
        description: "Official news and updates from the staff",
    },
    {
        id: 2,
        name: "Support",
        description: "Ask questions and get help from the community",
    },
    {
        id: 3,
        name: "General Discussion",
        description: "Talk about anything related to the server",
    },
];

const MOCK_THREADS = {
    1: [
        {
            id: 101,
            title: "Server Launch – Welcome!",
            author_account: "admin",
            views: 312,
        },
        {
            id: 102,
            title: "Upcoming Patch Notes",
            author_account: "admin",
            views: 198,
        },
        {
            id: 103,
            title: "Upcoming Patch Notes",
            author_account: "admin",
            views: 198,
        },
    ],
    2: [
        {
            id: 201,
            title: "Can’t connect to server",
            author_account: "player01",
            views: 84,
        },
        {
            id: 202,
            title: "Reset system explained?",
            author_account: "newbie",
            views: 156,
        },
    ],
    3: [
        {
            id: 301,
            title: "Best class for farming Ruud?",
            author_account: "farmer",
            views: 421,
        },
        {
            id: 302,
            title: "Show your character builds!",
            author_account: "veteran",
            views: 267,
        },
    ],
};

const MOCK_POSTS = {
    101: [
        {
            id: 1, author: "admin", content: "Welcome to the server!",
            createdAt: "2024-01-18T12:15:00",
        },
        {
            id: 2, author: "player01", content: "Glad to be here 🔥",
            createdAt: "2024-01-18T12:15:00",
        },
    ],
    201: [
        {
            id: 1, author: "player01", content: "I get disconnected instantly.",
            createdAt: "2024-01-18T12:15:00",
        },
        {
            id: 2, author: "admin", content: "Check your firewall & ports.",
            createdAt: "2024-01-18T12:15:00",
        },
    ],
};

/* ------------------------------------------ */

function Forum({ user, currentTheme, onThemeChange }) {
    const [categories, setCategories] = useState([]);
    const [threads, setThreads] = useState({});
    const navigate = useNavigate();
    const [activeThread, setActiveThread] = useState(null);
    const [creatingThread, setCreatingThread] = useState(false);
    const [newThreadTitle, setNewThreadTitle] = useState("");
    const [newThreadCategory, setNewThreadCategory] = useState(null);
    const [newThreadBody, setNewThreadBody] = useState("");
    const [replyText, setReplyText] = useState("");

    useEffect(() => {
        setCategories(MOCK_CATEGORIES);
        setThreads(MOCK_THREADS);
        setActiveThread(null);
    }, []);

    const handleCreateThread = () => {
        if (!newThreadTitle.trim() || !newThreadCategory) return;

        const newThread = {
            id: Date.now(),
            title: newThreadTitle,
            author_account: user,
            views: 0,
            body: newThreadBody,
        };


        setThreads((prev) => ({
            ...prev,
            [newThreadCategory]: [
                newThread,
                ...(prev[newThreadCategory] || []),
            ],
        }));

        setNewThreadTitle("");
        setNewThreadCategory(null);
        setCreatingThread(false); setNewThreadBody("");

    };
    const handleReply = () => {
        if (!replyText.trim() || !activeThread) return;

        MOCK_POSTS[activeThread.id] = [
            ...(MOCK_POSTS[activeThread.id] || []),
            {
                id: Date.now(),
                author: user,
                content: replyText,
                createdAt: new Date().toISOString(),
            },
        ];

        setReplyText("");
    };

    const loadThreads = (categoryId) => {
        setThreads((prev) => ({
            ...prev,
            [categoryId]: MOCK_THREADS[categoryId] || [],
        }));
    };
    const handleDeleteThread = (categoryId, threadId) => {
        setThreads((prev) => ({
            ...prev,
            [categoryId]: prev[categoryId].filter(
                (t) => t.id !== threadId
            ),
        }));
    };
    const openThread = (catId, thread) => {
        // increment views (mock)
        setThreads((prev) => ({
            ...prev,
            [catId]: prev[catId].map((t) =>
                t.id === thread.id
                    ? { ...t, views: (t.views || 0) + 1 }
                    : t
            ),
        }));

        setActiveThread({
            ...thread,
            categoryId: catId,
        });
    };

    return (
        <ForumWrapper>
            <Navigation user={user} />

            <ForumContent>
                <ForumBox>
                    <h2>Community</h2>


                    {/* ---------------- THREAD VIEW ---------------- */}
                    {activeThread && (
                        <>
                            <ActionButton
                                onClick={() => setActiveThread(null)}
                                style={{ alignSelf: "flex-start" }}
                            >
                                ← Back to Forum
                            </ActionButton>

                            <CategoryCard>
                                <CategoryHeader>{activeThread.title}</CategoryHeader>
                                <CategoryDescription>
                                    Started by {activeThread.author_account}
                                </CategoryDescription>

                                {(MOCK_POSTS[activeThread.id] || []).map((post) => {
                                    const isOwner = true;

                                    return (
                                        <ReplyItem key={post.id}>
                                            <CategoryCard>
                                                <CategoryHeader>{post.author}</CategoryHeader>
                                                <ReplyMeta>
                                                    Posted {new Date(post.createdAt).toLocaleString()}
                                                </ReplyMeta>
                                                <CategoryDescription>{post.content}</CategoryDescription>

                                                {isOwner && (
                                                    <ReplyActions>
                                                        <IconButton title="Edit reply">
                                                            <FontAwesomeIcon icon={faPen} />
                                                        </IconButton>
                                                        <IconButton $danger title="Delete reply">
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </IconButton>
                                                    </ReplyActions>
                                                )}
                                            </CategoryCard>
                                        </ReplyItem>

                                    );

                                })}
                                <ReplyBox>
                                    <CategoryHeader>Reply</CategoryHeader>

                                    <NewThreadTextarea
                                        placeholder="Write a reply..."
                                        value={replyText}
                                        onChange={(e) => setReplyText(e.target.value)}
                                    />

                                    <NewThreadActions>
                                        <ActionButton onClick={handleReply}>
                                            Post Reply
                                        </ActionButton>
                                    </NewThreadActions>
                                </ReplyBox>

                            </CategoryCard>
                        </>
                    )}

                    {/* ---------------- FORUM LIST VIEW ---------------- */}
                    {!activeThread &&
                        categories.map((cat) => (
                            <CategoryCard key={cat.id}>
                                <CategoryHeader>{cat.name}</CategoryHeader>
                                <CategoryDescription>{cat.description}</CategoryDescription>

                                {threads[cat.id]
                                    ?.sort((a, b) => b.views - a.views) // most viewed first
                                    .slice(0, 5)
                                    .map((thread) => {

                                        const isOwner = user && user === thread.author_account;
                                        const isPinned = thread.id === 101;

                                        return (
                                            <ThreadRow
                                                key={thread.id}
                                                onClick={() => openThread(cat.id, thread)}
                                            >
                                                <ThreadTitle>
                                                    {isPinned && (
                                                        <PinnedIcon title="Pinned">
                                                            <FontAwesomeIcon icon={faThumbtack} />{" "}
                                                        </PinnedIcon>
                                                    )}
                                                    {thread.title}
                                                </ThreadTitle>

                                                <ThreadRight>
                                                    <ThreadAuthor>
                                                        by {thread.author_account} · {thread.views ?? 0} views
                                                    </ThreadAuthor>


                                                    {user && (
                                                        <ThreadActions
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            {isOwner && (
                                                                <>
                                                                    <IconButton title="Edit thread">
                                                                        <FontAwesomeIcon icon={faPen} />
                                                                    </IconButton>

                                                                    <IconButton
                                                                        $danger
                                                                        title="Delete thread"
                                                                        onClick={() =>
                                                                            handleDeleteThread(cat.id, thread.id)
                                                                        }
                                                                    >
                                                                        <FontAwesomeIcon icon={faTrash} />
                                                                    </IconButton>
                                                                </>
                                                            )}
                                                        </ThreadActions>
                                                    )}
                                                </ThreadRight>
                                            </ThreadRow>
                                        );
                                    })}

                                <ButtonRow>
                                    <ActionButton onClick={() => loadThreads(cat.id)}>
                                        <FontAwesomeIcon icon={faEye} /> View Threads
                                    </ActionButton>

                                    <ActionButton
                                        onClick={() => {
                                            setCreatingThread(true);
                                            setNewThreadCategory(cat.id);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faPlus} /> New Thread
                                    </ActionButton>
                                </ButtonRow>
                                {creatingThread && newThreadCategory === cat.id && (
                                    <NewThreadBox>
                                        <CategoryHeader>
                                            <FontAwesomeIcon icon={faPlus} /> Create New Thread
                                        </CategoryHeader>

                                        <NewThreadInput
                                            placeholder="Thread title"
                                            value={newThreadTitle}
                                            onChange={(e) => setNewThreadTitle(e.target.value)}
                                        />

                                        <NewThreadTextarea
                                            placeholder="What do you want to discuss?"
                                            value={newThreadBody}
                                            onChange={(e) => setNewThreadBody(e.target.value)}
                                        />

                                        <SectionDivider />

                                        <NewThreadActions>
                                            <ActionButton onClick={handleCreateThread}>
                                                Post Thread
                                            </ActionButton>
                                            <ActionButton
                                                onClick={() => {
                                                    setCreatingThread(false);
                                                    setNewThreadTitle("");
                                                    setNewThreadBody("");
                                                    setNewThreadCategory(null);
                                                }}
                                            >
                                                Cancel
                                            </ActionButton>
                                        </NewThreadActions>
                                    </NewThreadBox>
                                )}


                            </CategoryCard>
                        ))}

                </ForumBox>
            </ForumContent>

            <Footer currentTheme={currentTheme} onThemeChange={onThemeChange} />
        </ForumWrapper>
    );
}

export default Forum;
