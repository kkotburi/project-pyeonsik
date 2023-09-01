import { atom } from 'jotai';
import { Post } from 'src/types/types';
import { atomWithHash } from 'jotai-location';
import { Location } from 'react-router';

export const myPagePostAtom = atom<Post[]>([]);

interface User {
  id: string;
  created_at?: string;
  email: string;
  nickname: string;
  profileImg: string;
}

export const userAtom = atom<User | null>(null);

interface Props {
  state: boolean;
  data: null | Post;
}

export const modalOpenAtom = atomWithHash<Props>('modalOpen', { state: false, data: null });

interface LoginModalProps {
  state: boolean;
  location?: Location | null;
}

export const loginModalAtom = atom<LoginModalProps>({ state: false, location: null });
