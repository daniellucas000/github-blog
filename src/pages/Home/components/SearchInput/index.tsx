import { SearchInputContainer } from './styles';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface SearchInputProps {
  postLength: number;
  getPosts: (query?: string) => Promise<void>;
}

export function SearchInput({ postLength, getPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query);
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <h3>Publicações</h3>
        <span>{postLength} publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchInputContainer>
  );
}
