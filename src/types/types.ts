// input custom hook
export interface InputProps {
  type: string;
  name: string;
  id?: string;
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
}
export interface TextAreaInputProps {
  type: string;
  name: string;
  id?: string;
  title: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  autoFocus?: boolean;
}

// post
export interface Post {
  id: string;
  created_at: string;
  orgPostId: string | Post;
  postCategory: string;
  title: string;
  body: string;
  product: [];
  userId: PostUserProfile;
  likes: string;
  likesCount: number;
  tags: { x: number; y: number; prodData: string; img: string; price: string }[];
  tagimage?: string;
  img: string;
  recipeBody?: string[];
}

export interface PostUserProfile {
  id: string;
  nickname: string;
  profileImg: string;
}

export interface CommonBodyProps {
  body: string;
  setBody: React.Dispatch<React.SetStateAction<string>>;
}

export interface BottomFunctionProps {
  userId: string;
  post: Post;
}

// 게시글 작성 임시
export interface NewPost {
  orgPostId: string;
  hasOrgPost: boolean;
  postCategory: string;
  title: string;
  body: string;
  userId: string;
}

export interface NewRecipePost {
  // orgPostId: string | null;
  hasOrgPost: boolean;
  postCategory: string;
  title: string;
  recipeBody: string[];
  userId: string;
}

export interface EditPost {
  id: string;
  title: string;
  body: string;
}

export interface TagEditPost {
  id: string;
  title: string;
  recipeBody: string[];
}

// post like
export interface PostLike {
  id: string;
  postId: string;
  userId: string;
}

export interface NewPostLike {
  postId: string;
  userId: string;
}

// post bookmark
export interface PostBookmark {
  id: string;
  postId: string;
  userId: string;
}

export interface NewPostBookmark {
  postId: string;
  userId: string;
}

// etc.
export interface UserType {
  uid: string;
  email: string;
  password: string;
  nickname: string;
  profileimg: File | null;
}

export interface Likes {
  id: string;
  likes: string;
  postId: string;
}

export interface RankProps {
  $isfirst?: boolean;
}

export interface RenderComponents {
  type: string;
  component: JSX.Element;
}

// 이 아래는 이미지 태그 관련 프롭스입니다! 위에 포스트에도 살짝 있긴합니다
export interface Tag {
  x: number;
  y: number;
  prodData: string;
  img: string;
  price: string;
  prodBrand?: string;
  id?: string;
  originalX?: number;
  originalY?: number;
}

export interface ImageTag {
  x: number;
  y: number;
  prodData: string;
  img: string;
  price: string;
  selectedimg: string;
  prodBrand?: string;
}

export interface ManyTag {
  x: number;
  y: number;
  prodData: string;
  img: string;
  price: string;
  imageIndex: number;
}

export interface ImageData {
  url: string[];
  tags: Tag[];
}

export interface Data {
  prodName: string;
  prodImg: string;
  prodBrand: string;
  prodCategory: string;
  price: string;
  id: string;
}

export interface ImageTagProps {
  onTagsAndResultsChange: (tags: Tag[], searchResults: Data[]) => void;
  onImageSelect: (selectedImage: File) => void;
  onContentsChange: (contents: string) => void;
  onReplace?: (replacementImage: File) => void;
  imageData?: File;
  tagData?: Tag[] | null;
  body?: string | null;
}

export interface ImageTagPropsToAddImageComponent {
  onImageSelect?: (selectedImage: File) => void;
}

export interface SearchProps {
  onSearchResultSelect: (result: Data) => void;
}

export interface ImageUploaderProps {
  onImageSelect: (imageFile: File) => void;
  imageSelected: string;
}
export interface TagImageProps {
  imageUrl: string;
  recipeBody?: string;
  tagsForImage: ImageTag[];
}
//여기까지

/// 무한스크롤 관련
export interface ProdEvent {
  type: string;
}

export interface Product {
  created_at: string;
  event: ProdEvent | null;
  id: string;
  new: boolean;
  price: string;
  prodBrand: string;
  prodCategory: string;
  prodImg: string;
  prodName: string;
}

export interface InfinityProductList {
  products: Product[];
  page: number;
  total_pages: number;
  total_results: number | null;
}

export interface InfinityPostList {
  posts: Post[];
  page: number;
  total_pages: number;
  total_results: number | null;
}

export interface AddImageTagProps {
  imageData?: File[];
  tagData?: Tag[][] | null;
  body?: string[] | null;
  isEditMode?: boolean;
}
