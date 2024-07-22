export interface BlogPost {
    uid: string; 
    title: string;
    content: string; 
    slug: string; 
    is_published: boolean;
    published_at: Date | null; 
    created_at: Date; 
    last_modified_at: Date; 
    author_uid: string; 
  }
  