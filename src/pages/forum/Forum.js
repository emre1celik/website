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
    PinnedIcon,
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
    faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

/* ---------------- MOCK DATA ---------------- */

const MOCK_CATEGORIES = [
    {
        id: 1,
        name: "Announcements",
        description:
            "Official announcements from the staff including updates, maintenance notices, events, and important server-wide information.",
    },
    {
        id: 2,
        name: "Support",
        description:
            "Need help? Ask questions about gameplay, bugs, account issues, or technical problems and get help from staff or the community.",
    },
    {
        id: 3,
        name: "General Discussion",
        description:
            "Chat about anything related to the server, share experiences, ideas, screenshots, and connect with other players.",
    },
    {
        id: 4,
        name: "Guides & Tutorials",
        description:
            "Community-written guides, tutorials, tips, and strategies to help new and veteran players alike.",
    },
];

const MOCK_THREADS = {
    1: [
        {
            id: 101,
            title: "Server Launch – Welcome!",
            author_account: "admin",
            views: 312,
            pinned: true,
            body:
                "Welcome to the server! This thread will outline what you can expect, upcoming features, and how to get started. We’re excited to have you here.",
        },
        {
            id: 102,
            title: "Upcoming Patch Notes",
            author_account: "admin",
            views: 198,
            body:
                "Patch notes for the upcoming update will include balance changes, bug fixes, and new content. Stay tuned!",
        },
    ],
    2: [
        {
            id: 101,
            title: "Server Launch – Welcome!",
            author_account: "admin",
            views: 312,
            pinned: true,
            body:
                "Welcome to the server! This thread will outline what you can expect, upcoming features, and how to get started. We’re excited to have you here.",
        },
        {
            id: 102,
            title: "Upcoming Patch Notes",
            author_account: "admin",
            views: 198,
            body:
                "Patch notes for the upcoming update will include balance changes, bug fixes, and new content. Stay tuned!",
        },
    ],
};

/* THREAD REPLIES */
const MOCK_POSTS = {
    101: [
        {
            id: 1,
            author: "admin",
            content: "Welcome everyone! Please read the rules and have fun.",
            createdAt: "2024-01-18T12:15:00",
        },
        {
            id: 2,
            author: "player01",
            content: "Glad to be here! Server feels great so far 🔥",
            createdAt: "2024-01-18T12:20:00",
        },
    ],
};

/* ------------------------------------------ */

const THREADS_PER_PAGE = 5;

function Forum({ user, currentTheme, onThemeChange }) {
    const [categories, setCategories] = useState([]);
    const [threads, setThreads] = useState({});
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
        if (!replyText.trim() || !activeThread) return;

        MOCK_POSTS[activeThread.id] = [
            ...(MOCK_POSTS[activeThread.id] || []),
            {
                id: Date.now(),
                author: user || "guest",
                content: replyText,
                createdAt: new Date().toISOString(),
            },
        ];

        setReplyText("");
    };

    return (
        <ForumWrapper>
            <Navigation user={user} />
            <ForumContent>
                <ForumBox>
                    <h2 style={{ textAlign: "center" }}>Community</h2>

                    {/* ---------------- THREAD VIEW ---------------- */}
                    {activeThread && (
                        <>
                            <ActionButton onClick={() => setActiveThread(null)}>
                                ← Back to Threads
                            </ActionButton>

                            {/* THREAD HEADER */}
                            <CategoryCard>
                                <CategoryHeader>{activeThread.title}</CategoryHeader>
                                <ReplyMeta>
                                    Posted by {activeThread.author_account}
                                </ReplyMeta>
                                <CategoryDescription>{activeThread.body}</CategoryDescription>
                            </CategoryCard>

                            {/* REPLIES */}
                            {(MOCK_POSTS[activeThread.id] || []).map(post => {
                                const isOwner = true; // temp until auth

                                return (
                                    <ReplyItem key={post.id}>
                                        <CategoryCard>
                                            <CategoryHeader>{post.author}</CategoryHeader>
                                            <ReplyMeta>
                                                {new Date(post.createdAt).toLocaleString()}
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

                            {/* REPLY BOX */}
                            <ReplyBox>
                                <CategoryHeader>Reply</CategoryHeader>
                                <NewThreadTextarea
                                    placeholder="Write a reply..."
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

                    {/* ---------------- CATEGORY LIST ---------------- */}
                    {!activeThread &&
                        categories.map(cat => {
                            const allThreads = threads[cat.id] || [];
                            const currentPage = threadPages[cat.id] || 1;
                            const totalPages = Math.ceil(allThreads.length / THREADS_PER_PAGE);

                            const start = (currentPage - 1) * THREADS_PER_PAGE;
                            const paginatedThreads = allThreads.slice(
                                start,
                                start + THREADS_PER_PAGE
                            );

                            return (
                                <CategoryCard key={cat.id}>
                                    <CategoryHeader>
                                        <FontAwesomeIcon icon={faNewspaper} /> {cat.name}
                                    </CategoryHeader>
                                    <CategoryDescription>{cat.description}</CategoryDescription>

                                    {paginatedThreads.map(thread => (
                                        <ThreadRow
                                            key={thread.id}
                                            onClick={() => openThread(cat.id, thread)}
                                        >
                                            <ThreadTitle>
                                                <PinnedIcon>
                                                    <FontAwesomeIcon
                                                        icon={thread.pinned ? faThumbtack : faNewspaper}
                                                    />
                                                </PinnedIcon>
                                                {thread.title}
                                            </ThreadTitle>

                                            <ThreadRight>
                                                <ThreadAuthor>
                                                    {thread.author_account} · {thread.views} views
                                                </ThreadAuthor>
                                            </ThreadRight>
                                        </ThreadRow>
                                    ))}

                                    {totalPages > 1 && (
                                        <PaginationRow>
                                            <PageButton
                                                disabled={currentPage === 1}
                                                onClick={() =>
                                                    setThreadPages(p => ({
                                                        ...p,
                                                        [cat.id]: currentPage - 1,
                                                    }))
                                                }
                                            >
                                                Prev
                                            </PageButton>

                                            <PageIndicator>
                                                Page {currentPage} / {totalPages}
                                            </PageIndicator>

                                            <PageButton
                                                disabled={currentPage === totalPages}
                                                onClick={() =>
                                                    setThreadPages(p => ({
                                                        ...p,
                                                        [cat.id]: currentPage + 1,
                                                    }))
                                                }
                                            >
                                                Next
                                            </PageButton>
                                        </PaginationRow>
                                    )}

                                    <ButtonRow>
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
