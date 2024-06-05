export enum NoticeTarget {
    ADMIN = 'ADMIN',
    STUDENT = 'STUDENT'
}

export type Notice1 = {
    uid: string;
    title: string;
    content: string;
    audience: NoticeTarget;
    completed: boolean;
    created_at: string;
    last_modified_at: string;
}