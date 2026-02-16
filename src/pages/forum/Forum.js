import { useEffect, useState } from "react";
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
    ThreadRight,
    ButtonRow,
    ActionButton,
    IconButton,
    ReplyItem,
    ReplyMeta,
    ReplyActions,
    ReplyBox,
    NewThreadTextarea,
    NewThreadActions,
    PaginationRow,
    PageButton,
    PageIndicator,
} from "./ForumStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faPen,
    faThumbtack,
    faPlus,
    faEye,
    faNewspaper,
    faBullhorn,
    faComments,
    faLifeRing,
    faCogs,
} from "@fortawesome/free-solid-svg-icons";

/* ---------------- MOCK DATA ---------------- */

const MOCK_CATEGORIES = [
    {
        id: 1,
        name: "Announcements",
        icon: faBullhorn,
        description:
            "Official announcements from the staff including server updates, scheduled maintenance, patch notes, events, and important notices you should not miss.",
    },
    {
        id: 2,
        name: "Support",
        icon: faLifeRing,
        description:
            "Need help? Ask questions about technical issues, account problems, gameplay bugs, or anything else you need assistance with.",
    },
    {
        id: 3,
        name: "General Discussion",
        icon: faComments,
        description:
            "Talk freely about the game, share opinions, strategies, screenshots, stories, or anything related to the community.",
    },
    {
        id: 4,
        name: "Development & Feedback",
        icon: faCogs,
        description:
            "Share feedback, report bugs, suggest new features, and discuss ongoing development with the team and other players.",
    },
];

const MOCK_THREADS = {
    1: [
        { id: 101, title: "Server Launch – Welcome!", author_account: "admin", views: 312, sticky: true },
        { id: 102, title: "Upcoming Patch Notes", author_account: "admin", views: 198 },
        { id: 103, title: "Maintenance Schedule", author_account: "admin", views: 144 },
        { id: 104, title: "Server Rules & Guidelines", author_account: "admin", views: 522 },
        { id: 105, title: "Holiday Events Incoming", author_account: "admin", views: 201 },
        { id: 106, title: "Website Update Overview", author_account: "admin", views: 87 },
    ],
};

const MOCK_POSTS = {
    101: [
        { id: 1, author: "admin", content: "Welcome to the server!", createdAt: "2024-01-18T12:15:00" },
        { id: 2, author: "player01", content: "Glad to be here!", createdAt: "2024-01-18T12:20:00" },
    ],
};

const THREADS_PER_PAGE = 4;

/* ------------------------------------------ */

function Forum({ user, currentTheme, onThemeChange }) {
    const [categories, setCategories] = useState([]);
    const [threads, setThreads] = useState({});
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeThread, setActiveThread] = useState(null);
    const [replyText, setReplyText] = useState("");
    const [threadPages, setThreadPages] = useState({});

    useEffect(() => {
        setCategories(MOCK_CATEGORIES);
        setThreads(MOCK_THREADS);
    }, []);

    const openThread = (catId, thread) => {
        setThreads(prev => ({
            ...prev,
            [catId]: prev[catId].map(t =>
                t.id === thread.id ? { ...t, views: t.views + 1 } : t
            ),
        }));
        setActiveThread({ ...thread, categoryId: catId });
    };

    const handleReply = () => {
        if (!replyText.trim()) return;

        MOCK_POSTS[activeThread.id].push({
            id: Date.now(),
            author: user,
            content: replyText,
            createdAt: new Date().toISOString(),
        });

        setReplyText("");
    };

    const toggleCategory = (catId) => {
        setActiveCategory(prev => (prev === catId ? null : catId));
        setThreadPages(prev => ({ ...prev, [catId]: 1 }));
    };

    return (
        <ForumWrapper>
            <Navigation user={user} />
            <ForumContent>
                <ForumBox>
                    <h2>Community</h2>

                    {activeThread && (
                        <>
                            <ActionButton onClick={() => setActiveThread(null)}>
                                ← Back
                            </ActionButton>

                            {(MOCK_POSTS[activeThread.id] || []).map(post => (
                                <ReplyItem key={post.id}>
                                    <CategoryCard>
                                        <CategoryHeader>{post.author}</CategoryHeader>
                                        <ReplyMeta>
                                            {new Date(post.createdAt).toLocaleString()}
                                        </ReplyMeta>
                                        <CategoryDescription>{post.content}</CategoryDescription>

                                        <ReplyActions>
                                            <IconButton><FontAwesomeIcon icon={faPen} /></IconButton>
                                            <IconButton $danger><FontAwesomeIcon icon={faTrash} /></IconButton>
                                        </ReplyActions>
                                    </CategoryCard>
                                </ReplyItem>
                            ))}

                            <ReplyBox>
                                <CategoryHeader>Reply</CategoryHeader>
                                <NewThreadTextarea
                                    value={replyText}
                                    onChange={e => setReplyText(e.target.value)}
                                />
                                <NewThreadActions>
                                    <ActionButton onClick={handleReply}>
                                        Post Reply
                                    </ActionButton>
                                </NewThreadActions>
                            </ReplyBox>
                        </>
                    )}

                    {!activeThread &&
                        categories.map(cat => {
                            const allThreads = threads[cat.id] || [];
                            const page = threadPages[cat.id] || 1;
                            const totalPages = Math.ceil(allThreads.length / THREADS_PER_PAGE);

                            const start = (page - 1) * THREADS_PER_PAGE;
                            const pageThreads = allThreads.slice(start, start + THREADS_PER_PAGE);

                            return (
                                <CategoryCard key={cat.id}>
                                    <CategoryHeader>
                                        <FontAwesomeIcon icon={cat.icon} />
                                        {cat.name}
                                    </CategoryHeader>
                                    <CategoryDescription>{cat.description}</CategoryDescription>

                                    {activeCategory === cat.id &&
                                        pageThreads.map(thread => (
                                            <ThreadRow
                                                key={thread.id}
                                                onClick={() => openThread(cat.id, thread)}
                                            >
                                                <ThreadTitle>
                                                    <FontAwesomeIcon
                                                        icon={thread.sticky ? faThumbtack : faNewspaper}
                                                    />
                                                    {thread.title}
                                                </ThreadTitle>

                                                <ThreadRight>
                                                    <ThreadAuthor>
                                                        {thread.author_account} · {thread.views} views
                                                    </ThreadAuthor>
                                                </ThreadRight>
                                            </ThreadRow>
                                        ))}

                                    {activeCategory === cat.id && totalPages > 1 && (
                                        <PaginationRow>
                                            <PageButton
                                                disabled={page === 1}
                                                onClick={() =>
                                                    setThreadPages(p => ({
                                                        ...p,
                                                        [cat.id]: page - 1,
                                                    }))
                                                }
                                            >
                                                Prev
                                            </PageButton>

                                            <PageIndicator>
                                                Page {page} / {totalPages}
                                            </PageIndicator>

                                            <PageButton
                                                disabled={page === totalPages}
                                                onClick={() =>
                                                    setThreadPages(p => ({
                                                        ...p,
                                                        [cat.id]: page + 1,
                                                    }))
                                                }
                                            >
                                                Next
                                            </PageButton>
                                        </PaginationRow>
                                    )}

                                    <ButtonRow>
                                        <ActionButton onClick={() => toggleCategory(cat.id)}>
                                            <FontAwesomeIcon icon={faEye} />
                                            {activeCategory === cat.id
                                                ? " Hide Threads"
                                                : " View Threads"}
                                        </ActionButton>

                                        <ActionButton>
                                            <FontAwesomeIcon icon={faPlus} /> New Thread
                                        </ActionButton>
                                    </ButtonRow>
                                </CategoryCard>
                            );
                        })}
                </ForumBox>
            </ForumContent>

            <Footer currentTheme={currentTheme} onThemeChange={onThemeChange} />
        </ForumWrapper>
    );
}

export default Forum;
