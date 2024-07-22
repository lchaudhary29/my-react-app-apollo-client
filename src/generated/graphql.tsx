import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  geo?: Maybe<Geo>;
  street?: Maybe<Scalars['String']['output']>;
  suite?: Maybe<Scalars['String']['output']>;
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type AddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  geo?: InputMaybe<GeoInput>;
  street?: InputMaybe<Scalars['String']['input']>;
  suite?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type Album = {
  __typename?: 'Album';
  id?: Maybe<Scalars['ID']['output']>;
  photos?: Maybe<PhotosPage>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};


export type AlbumPhotosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type AlbumsPage = {
  __typename?: 'AlbumsPage';
  data?: Maybe<Array<Maybe<Album>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Comment = {
  __typename?: 'Comment';
  body?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  post?: Maybe<Post>;
};

export type CommentsPage = {
  __typename?: 'CommentsPage';
  data?: Maybe<Array<Maybe<Comment>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Company = {
  __typename?: 'Company';
  bs?: Maybe<Scalars['String']['output']>;
  catchPhrase?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CompanyInput = {
  bs?: InputMaybe<Scalars['String']['input']>;
  catchPhrase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAlbumInput = {
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateCommentInput = {
  body: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreatePhotoInput = {
  thumbnailUrl: Scalars['String']['input'];
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type CreatePostInput = {
  body: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateTodoInput = {
  completed: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  address?: InputMaybe<AddressInput>;
  company?: InputMaybe<CompanyInput>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export type Employee = {
  __typename?: 'Employee';
  department?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position: Scalars['String']['output'];
};

export type EmployeeInput = {
  department?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  position: Scalars['String']['input'];
};

export type Geo = {
  __typename?: 'Geo';
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export type GeoInput = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Int']['output']>;
  createAlbum?: Maybe<Album>;
  createComment?: Maybe<Comment>;
  createEmployee?: Maybe<Employee>;
  createPhoto?: Maybe<Photo>;
  createPost?: Maybe<Post>;
  createTodo?: Maybe<Todo>;
  createUser?: Maybe<User>;
  deleteAlbum?: Maybe<Scalars['Boolean']['output']>;
  deleteComment?: Maybe<Scalars['Boolean']['output']>;
  deleteEmployee?: Maybe<Scalars['Boolean']['output']>;
  deletePhoto?: Maybe<Scalars['Boolean']['output']>;
  deletePost?: Maybe<Scalars['Boolean']['output']>;
  deleteTodo?: Maybe<Scalars['Boolean']['output']>;
  deleteUser?: Maybe<Scalars['Boolean']['output']>;
  updateAlbum?: Maybe<Album>;
  updateComment?: Maybe<Comment>;
  updateEmployee?: Maybe<Employee>;
  updatePhoto?: Maybe<Photo>;
  updatePost?: Maybe<Post>;
  updateTodo?: Maybe<Todo>;
  updateUser?: Maybe<User>;
};


export type MutationCreateAlbumArgs = {
  input: CreateAlbumInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateEmployeeArgs = {
  employee: EmployeeInput;
};


export type MutationCreatePhotoArgs = {
  input: CreatePhotoInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEmployeeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePhotoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAlbumArgs = {
  id: Scalars['ID']['input'];
  input: UpdateAlbumInput;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCommentInput;
};


export type MutationUpdateEmployeeArgs = {
  employee: EmployeeInput;
};


export type MutationUpdatePhotoArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePhotoInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePostInput;
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTodoInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
};

export enum OperatorKindEnum {
  Gte = 'GTE',
  Like = 'LIKE',
  Lte = 'LTE',
  Ne = 'NE'
}

export type OperatorOptions = {
  field?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<OperatorKindEnum>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type PageLimitPair = {
  __typename?: 'PageLimitPair';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
};

export type PageMetadata = {
  __typename?: 'PageMetadata';
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PageQueryOptions = {
  operators?: InputMaybe<Array<InputMaybe<OperatorOptions>>>;
  paginate?: InputMaybe<PaginateOptions>;
  search?: InputMaybe<SearchOptions>;
  slice?: InputMaybe<SliceOptions>;
  sort?: InputMaybe<Array<InputMaybe<SortOptions>>>;
};

export type PaginateOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginationLinks = {
  __typename?: 'PaginationLinks';
  first?: Maybe<PageLimitPair>;
  last?: Maybe<PageLimitPair>;
  next?: Maybe<PageLimitPair>;
  prev?: Maybe<PageLimitPair>;
};

export type Photo = {
  __typename?: 'Photo';
  album?: Maybe<Album>;
  id?: Maybe<Scalars['ID']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type PhotosPage = {
  __typename?: 'PhotosPage';
  data?: Maybe<Array<Maybe<Photo>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Post = {
  __typename?: 'Post';
  body?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<CommentsPage>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};


export type PostCommentsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type PostsPage = {
  __typename?: 'PostsPage';
  data?: Maybe<Array<Maybe<Post>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Int']['output']>;
  album?: Maybe<Album>;
  albums?: Maybe<AlbumsPage>;
  comment?: Maybe<Comment>;
  comments?: Maybe<CommentsPage>;
  employees?: Maybe<Array<Maybe<Employee>>>;
  photo?: Maybe<Photo>;
  photos?: Maybe<PhotosPage>;
  post?: Maybe<Post>;
  posts?: Maybe<PostsPage>;
  todo?: Maybe<Todo>;
  todos?: Maybe<TodosPage>;
  user?: Maybe<User>;
  users?: Maybe<UsersPage>;
};


export type QueryAlbumArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAlbumsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommentsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryPhotoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPhotosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryTodoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTodosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type SearchOptions = {
  q?: InputMaybe<Scalars['String']['input']>;
};

export type SliceOptions = {
  end?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type SortOptions = {
  field?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<SortOrderEnum>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Todo = {
  __typename?: 'Todo';
  completed?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type TodosPage = {
  __typename?: 'TodosPage';
  data?: Maybe<Array<Maybe<Todo>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type UpdateAlbumInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateCommentInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePhotoInput = {
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTodoInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  address?: InputMaybe<AddressInput>;
  company?: InputMaybe<CompanyInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Address>;
  albums?: Maybe<AlbumsPage>;
  company?: Maybe<Company>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<PostsPage>;
  todos?: Maybe<TodosPage>;
  username?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};


export type UserAlbumsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type UserPostsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type UserTodosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type UsersPage = {
  __typename?: 'UsersPage';
  data?: Maybe<Array<Maybe<User>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type LocalEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type LocalEmployeesQuery = { __typename?: 'Query', employees?: Array<{ __typename?: 'Employee', id: string, name: string, email: string, position: string, department?: string | null } | null> | null };

export type CreateEmployeeMutationVariables = Exact<{
  employee: EmployeeInput;
}>;


export type CreateEmployeeMutation = { __typename?: 'Mutation', createEmployee?: { __typename?: 'Employee', id: string, name: string, email: string, position: string, department?: string | null } | null };

export type UpdateEmployeeMutationVariables = Exact<{
  employee: EmployeeInput;
}>;


export type UpdateEmployeeMutation = { __typename?: 'Mutation', updateEmployee?: { __typename?: 'Employee', id: string, name: string, email: string, position: string, department?: string | null } | null };

export type DeleteEmployeeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteEmployeeMutation = { __typename?: 'Mutation', deleteEmployee?: boolean | null };

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost?: { __typename?: 'Post', id?: string | null, title?: string | null, body?: string | null } | null };

export type CreateAlbumMutationVariables = Exact<{
  input: CreateAlbumInput;
}>;


export type CreateAlbumMutation = { __typename?: 'Mutation', createAlbum?: { __typename?: 'Album', id?: string | null, title?: string | null } | null };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id?: string | null, name?: string | null, email?: string | null, username?: string | null, phone?: string | null, website?: string | null } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: { __typename?: 'UsersPage', data?: Array<{ __typename?: 'User', id?: string | null, name?: string | null, email?: string | null, username?: string | null, phone?: string | null, website?: string | null } | null> | null } | null };


export const LocalEmployeesDocument = gql`
    query LocalEmployees {
  employees @client {
    id
    name
    email
    position
    department
  }
}
    `;

/**
 * __useLocalEmployeesQuery__
 *
 * To run a query within a React component, call `useLocalEmployeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocalEmployeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocalEmployeesQuery({
 *   variables: {
 *   },
 * });
 */
export function useLocalEmployeesQuery(baseOptions?: Apollo.QueryHookOptions<LocalEmployeesQuery, LocalEmployeesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocalEmployeesQuery, LocalEmployeesQueryVariables>(LocalEmployeesDocument, options);
      }
export function useLocalEmployeesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocalEmployeesQuery, LocalEmployeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocalEmployeesQuery, LocalEmployeesQueryVariables>(LocalEmployeesDocument, options);
        }
export function useLocalEmployeesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<LocalEmployeesQuery, LocalEmployeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LocalEmployeesQuery, LocalEmployeesQueryVariables>(LocalEmployeesDocument, options);
        }
export type LocalEmployeesQueryHookResult = ReturnType<typeof useLocalEmployeesQuery>;
export type LocalEmployeesLazyQueryHookResult = ReturnType<typeof useLocalEmployeesLazyQuery>;
export type LocalEmployeesSuspenseQueryHookResult = ReturnType<typeof useLocalEmployeesSuspenseQuery>;
export type LocalEmployeesQueryResult = Apollo.QueryResult<LocalEmployeesQuery, LocalEmployeesQueryVariables>;
export const CreateEmployeeDocument = gql`
    mutation CreateEmployee($employee: EmployeeInput!) {
  createEmployee(employee: $employee) @client {
    id
    name
    email
    position
    department
  }
}
    `;
export type CreateEmployeeMutationFn = Apollo.MutationFunction<CreateEmployeeMutation, CreateEmployeeMutationVariables>;

/**
 * __useCreateEmployeeMutation__
 *
 * To run a mutation, you first call `useCreateEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmployeeMutation, { data, loading, error }] = useCreateEmployeeMutation({
 *   variables: {
 *      employee: // value for 'employee'
 *   },
 * });
 */
export function useCreateEmployeeMutation(baseOptions?: Apollo.MutationHookOptions<CreateEmployeeMutation, CreateEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEmployeeMutation, CreateEmployeeMutationVariables>(CreateEmployeeDocument, options);
      }
export type CreateEmployeeMutationHookResult = ReturnType<typeof useCreateEmployeeMutation>;
export type CreateEmployeeMutationResult = Apollo.MutationResult<CreateEmployeeMutation>;
export type CreateEmployeeMutationOptions = Apollo.BaseMutationOptions<CreateEmployeeMutation, CreateEmployeeMutationVariables>;
export const UpdateEmployeeDocument = gql`
    mutation UpdateEmployee($employee: EmployeeInput!) {
  updateEmployee(employee: $employee) @client {
    id
    name
    email
    position
    department
  }
}
    `;
export type UpdateEmployeeMutationFn = Apollo.MutationFunction<UpdateEmployeeMutation, UpdateEmployeeMutationVariables>;

/**
 * __useUpdateEmployeeMutation__
 *
 * To run a mutation, you first call `useUpdateEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmployeeMutation, { data, loading, error }] = useUpdateEmployeeMutation({
 *   variables: {
 *      employee: // value for 'employee'
 *   },
 * });
 */
export function useUpdateEmployeeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEmployeeMutation, UpdateEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEmployeeMutation, UpdateEmployeeMutationVariables>(UpdateEmployeeDocument, options);
      }
export type UpdateEmployeeMutationHookResult = ReturnType<typeof useUpdateEmployeeMutation>;
export type UpdateEmployeeMutationResult = Apollo.MutationResult<UpdateEmployeeMutation>;
export type UpdateEmployeeMutationOptions = Apollo.BaseMutationOptions<UpdateEmployeeMutation, UpdateEmployeeMutationVariables>;
export const DeleteEmployeeDocument = gql`
    mutation DeleteEmployee($id: ID!) {
  deleteEmployee(id: $id) @client
}
    `;
export type DeleteEmployeeMutationFn = Apollo.MutationFunction<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>;

/**
 * __useDeleteEmployeeMutation__
 *
 * To run a mutation, you first call `useDeleteEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEmployeeMutation, { data, loading, error }] = useDeleteEmployeeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEmployeeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>(DeleteEmployeeDocument, options);
      }
export type DeleteEmployeeMutationHookResult = ReturnType<typeof useDeleteEmployeeMutation>;
export type DeleteEmployeeMutationResult = Apollo.MutationResult<DeleteEmployeeMutation>;
export type DeleteEmployeeMutationOptions = Apollo.BaseMutationOptions<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    body
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const CreateAlbumDocument = gql`
    mutation CreateAlbum($input: CreateAlbumInput!) {
  createAlbum(input: $input) {
    id
    title
  }
}
    `;
export type CreateAlbumMutationFn = Apollo.MutationFunction<CreateAlbumMutation, CreateAlbumMutationVariables>;

/**
 * __useCreateAlbumMutation__
 *
 * To run a mutation, you first call `useCreateAlbumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAlbumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAlbumMutation, { data, loading, error }] = useCreateAlbumMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAlbumMutation(baseOptions?: Apollo.MutationHookOptions<CreateAlbumMutation, CreateAlbumMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAlbumMutation, CreateAlbumMutationVariables>(CreateAlbumDocument, options);
      }
export type CreateAlbumMutationHookResult = ReturnType<typeof useCreateAlbumMutation>;
export type CreateAlbumMutationResult = Apollo.MutationResult<CreateAlbumMutation>;
export type CreateAlbumMutationOptions = Apollo.BaseMutationOptions<CreateAlbumMutation, CreateAlbumMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    email
    username
    phone
    website
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    data {
      id
      name
      email
      username
      phone
      website
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export function useUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersSuspenseQueryHookResult = ReturnType<typeof useUsersSuspenseQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;