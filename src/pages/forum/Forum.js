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
    NewThreadBox,
    NewThreadInput,
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
    faEye,
} from "@fortawesome/free-solid-svg-icons";

/* ---------------- MOCK DATA ---------------- */

const MOCK_CATEGORIES = [
    { id: 1, name: "Announcements", description: "Official news" },
    { id: 2, name: "Support", description: "Get help" },
    { id: 3, name: "General Discussion", description: "Talk freely" },
];

const MOCK_THREADS = {
    1: [
        { id: 101, title: "Server Launch – Welcome!", author_account: "admin", views: 312 },
        { id: 102, title: "Upcoming Patch Notes", author_account: "admin", views: 198 },
        { id: 103, title: "Maintenance Schedule", author_account: "admin", views: 144 },
        { id: 104, title: "Server Rules", author_account: "admin", views: 522 },
        { id: 105, title: "New Events Incoming", author_account: "admin", views: 201 },
        { id: 106, title: "Website Update", author_account: "admin", views: 87 },
    ],
};

const MOCK_POSTS = {
    101: [
        { id: 1, author: "admin", content: "Welcome!", createdAt: "2024-01-18T12:15:00" },
        { id: 2, author: "player01", content: "Glad to be here!", createdAt: "2024-01-18T12:20:00" },
    ],
};

/* ------------------------------------------ */

const THREADS_PER_PAGE = 5;

function Forum({ user, currentTheme, onThemeChange }) {
    const [categories, setCategories] = useState([]);
    const [threads, setThreads] = useState({});
    const [activeThread, setActiveThread] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [replyText, setReplyText] = useState("");
    const [threadPages, setThreadPages] = useState({}); // categoryId -> page

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

                    {/* ---------------- THREAD VIEW ---------------- */}
                    {activeThread && (
                        <>
                            <ActionButton onClick={() => setActiveThread(null)}>
                                ← Back
                            </ActionButton>

                            <CategoryCard>
                                <CategoryHeader>{activeThread.title}</CategoryHeader>
                                <CategoryDescription>
                                    Started by {activeThread.author_account}
                                </CategoryDescription>
                            </CategoryCard>

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
                                    <CategoryHeader>{cat.name}</CategoryHeader>
                                    <CategoryDescription>{cat.description}</CategoryDescription>

                                    {activeCategory === cat.id &&
                                        paginatedThreads.map(thread => (
                                            <ThreadRow
                                                key={thread.id}
                                                onClick={() => openThread(cat.id, thread)}
                                            >
                                                <ThreadTitle>
                                                    {thread.id === 101 && (
                                                        <PinnedIcon>
                                                            <FontAwesomeIcon icon={faThumbtack} />
                                                        </PinnedIcon>
                                                    )}
                                                    {thread.title}
                                                </ThreadTitle>

                                                <ThreadRight>
                                                    <ThreadAuthor>
                                                        Posted by {thread.author_account} · {thread.views} views
                                                    </ThreadAuthor>
                                                </ThreadRight>
                                            </ThreadRow>
                                        ))}

                                    {activeCategory === cat.id && totalPages > 1 && (
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
