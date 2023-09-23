import { toast } from 'react-toastify';
import supabase from 'src/lib/supabaseClient';
import { EditPost, NewPost, NewRecipePost, Post, TagEditPost } from 'src/types/common';

const getPost = async (id: string) => {
  const response = await supabase
    .from('posts')
    .select('*,userId(id,nickname,profileImg,level),orgPostId(*,userId(nickname))')
    .eq('id', id)
    .single();
  return response;
};

const getQuotationPosts = async (orgPostId: string) => {
  const response = await supabase.from('posts').select('*').eq('orgPostId', orgPostId);
  return response;
};

const addPost = async (post: NewPost) => {
  await supabase.from('posts').insert(post).select();
  toast('작성이 완료되었습니다.');
};

const updatePost = async (post: EditPost) => {
  await supabase.from('posts').update(post).eq('id', post.id).select();
};

const deletePost = async (id: string) => {
  await supabase.from('posts').delete().eq('id', id);
};

const addRecipePost = async (post: NewRecipePost) => {
  await supabase.from('posts').insert(post).select();
  toast('작성이 완료되었습니다.');
};

const tagUpdatePost = async (post: TagEditPost) => {
  await supabase.from('posts').update(post).eq('id', post.id).select();
};

const getMyPostsById = async (id: string) => {
  const response = await supabase
    .from('posts')
    .select('*,userId(id,nickname,profileImg,level)')
    .eq('userId', id)
    .order('created_at', { ascending: false });
  return response;
};

const getMyBookMarkById = async (id: string) => {
  const response = await supabase
    .from('post_bookmark')
    .select('postId(*,userId(*))')
    .eq('userId', id)
    .order('created_at', { ascending: false });
  return response;
};

const getMyLikePostById = async (id: string) => {
  const response = await supabase
    .from('post_likes')
    .select('postId(*,userId(*))')
    .eq('userId', id)
    .order('created_at', { ascending: false });
  return response;
};

interface Search {
  keyword: string;
  type?: string;
}

const getPostByKeyword = async ({ keyword, type }: Search) => {
  if (type === 'all') {
    return await supabase
      .from('posts')
      .select('*,userId(id,nickname,profileImg,level)')
      .ilike('title_body', `%${keyword}%`);
  } else {
    return await supabase
      .from('posts')
      .select('*,userId(id,nickname,profileImg,level)')
      .eq('postCategory', type)
      .textSearch('title_body', keyword);
  }
};

const getPostByKeywordSummary = async (keyword: string) => {
  const { data } = await supabase
    .from('posts')
    .select('*,userId(id,nickname,profileImg,level)')
    .ilike('title_body', `%${keyword}%`)
    .range(0, 3);
  const postData = data as Post[];
  return postData;
};

export {
  getPost,
  getQuotationPosts,
  addPost,
  updatePost,
  deletePost,
  getMyPostsById,
  getMyLikePostById,
  getMyBookMarkById,
  addRecipePost,
  tagUpdatePost,
  getPostByKeyword,
  getPostByKeywordSummary
};
