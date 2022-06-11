import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from 'react-query';
import { fetchData } from '../fetcher/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Mongo object id scalar type */
  ObjectId: any;
};

export type CvInput = {
  _id: Scalars['ObjectId'];
  date_of_birth: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  middle_name: Scalars['String'];
  user_education: Scalars['String'];
  user_email: Scalars['String'];
  user_location: Scalars['String'];
  user_proffesion: Scalars['String'];
  user_telephone: Scalars['String'];
};

export type CreateUserInput = {
  aboutMe: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  userCertificate_or_Education_five: Scalars['String'];
  userCertificate_or_Education_four: Scalars['String'];
  userCertificate_or_Education_one: Scalars['String'];
  userCertificate_or_Education_three: Scalars['String'];
  userCertificate_or_Education_two: Scalars['String'];
  userFirstName: Scalars['String'];
  userImage: Scalars['String'];
  userLastName: Scalars['String'];
  userLocationCity: Scalars['String'];
  userLocationState: Scalars['String'];
  userMiddleName: Scalars['String'];
  userPreviousJob_five: Scalars['String'];
  userPreviousJob_four: Scalars['String'];
  userPreviousJob_one: Scalars['String'];
  userPreviousJob_three: Scalars['String'];
  userPreviousJob_two: Scalars['String'];
  userProffesion: Scalars['String'];
  userSkills_five: Scalars['String'];
  userSkills_five_percent: Scalars['String'];
  userSkills_four: Scalars['String'];
  userSkills_four_percent: Scalars['String'];
  userSkills_one: Scalars['String'];
  userSkills_one_percent: Scalars['String'];
  userSkills_three: Scalars['String'];
  userSkills_three_percent: Scalars['String'];
  userSkills_two: Scalars['String'];
  userSkills_two_percent: Scalars['String'];
};

export type EditJob = {
  jobCategory?: InputMaybe<Scalars['String']>;
  jobCompanyEmail?: InputMaybe<Scalars['String']>;
  jobCompanyField?: InputMaybe<Scalars['String']>;
  jobCompanyLocation?: InputMaybe<Scalars['String']>;
  jobCompanyLogo?: InputMaybe<Scalars['String']>;
  jobCompanyName?: InputMaybe<Scalars['String']>;
  jobCompanyOffers_five?: InputMaybe<Scalars['String']>;
  jobCompanyOffers_four?: InputMaybe<Scalars['String']>;
  jobCompanyOffers_one?: InputMaybe<Scalars['String']>;
  jobCompanyOffers_six?: InputMaybe<Scalars['String']>;
  jobCompanyOffers_three?: InputMaybe<Scalars['String']>;
  jobCompanyOffers_two?: InputMaybe<Scalars['String']>;
  jobDescription?: InputMaybe<Scalars['String']>;
  jobImage?: InputMaybe<Scalars['String']>;
  jobLocation?: InputMaybe<Scalars['String']>;
  jobPostedOn?: InputMaybe<Scalars['String']>;
  jobRegion?: InputMaybe<Scalars['String']>;
  jobRequiredExpirience?: InputMaybe<Scalars['String']>;
  jobRequirements_five?: InputMaybe<Scalars['String']>;
  jobRequirements_four?: InputMaybe<Scalars['String']>;
  jobRequirements_one?: InputMaybe<Scalars['String']>;
  jobRequirements_three?: InputMaybe<Scalars['String']>;
  jobRequirements_two?: InputMaybe<Scalars['String']>;
  jobResponsibility_five?: InputMaybe<Scalars['String']>;
  jobResponsibility_four?: InputMaybe<Scalars['String']>;
  jobResponsibility_one?: InputMaybe<Scalars['String']>;
  jobResponsibility_three?: InputMaybe<Scalars['String']>;
  jobResponsibility_two?: InputMaybe<Scalars['String']>;
  jobSalary?: InputMaybe<Scalars['String']>;
  jobSpots?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  jobValidUntil?: InputMaybe<Scalars['String']>;
  jobWorkHours?: InputMaybe<Scalars['String']>;
  jobs: Array<JobInput>;
};

export type EditUserInput = {
  aboutMe: Scalars['String'];
  cvs: Array<CvInput>;
  email?: InputMaybe<Scalars['String']>;
  jobs: Array<JobInput>;
  password?: InputMaybe<Scalars['String']>;
  userCertificate_or_Education_five: Scalars['String'];
  userCertificate_or_Education_four: Scalars['String'];
  userCertificate_or_Education_one: Scalars['String'];
  userCertificate_or_Education_three: Scalars['String'];
  userCertificate_or_Education_two: Scalars['String'];
  userFirstName: Scalars['String'];
  userImage: Scalars['String'];
  userLastName: Scalars['String'];
  userLocationCity: Scalars['String'];
  userLocationState: Scalars['String'];
  userMiddleName: Scalars['String'];
  userPreviousJob_five: Scalars['String'];
  userPreviousJob_four: Scalars['String'];
  userPreviousJob_one: Scalars['String'];
  userPreviousJob_three: Scalars['String'];
  userPreviousJob_two: Scalars['String'];
  userProffesion: Scalars['String'];
  userSkills_five: Scalars['String'];
  userSkills_five_percent: Scalars['String'];
  userSkills_four: Scalars['String'];
  userSkills_four_percent: Scalars['String'];
  userSkills_one: Scalars['String'];
  userSkills_one_percent: Scalars['String'];
  userSkills_three: Scalars['String'];
  userSkills_three_percent: Scalars['String'];
  userSkills_two: Scalars['String'];
  userSkills_two_percent: Scalars['String'];
};

export type JobApplication = {
  __typename?: 'JobApplication';
  _id: Scalars['ObjectId'];
  jobCategory: Scalars['String'];
  jobCompanyEmail: Scalars['String'];
  jobCompanyField: Scalars['String'];
  jobCompanyLocation: Scalars['String'];
  jobCompanyLogo: Scalars['String'];
  jobCompanyName: Scalars['String'];
  jobCompanyOffers_five: Scalars['String'];
  jobCompanyOffers_four: Scalars['String'];
  jobCompanyOffers_one: Scalars['String'];
  jobCompanyOffers_six: Scalars['String'];
  jobCompanyOffers_three: Scalars['String'];
  jobCompanyOffers_two: Scalars['String'];
  jobDescription: Scalars['String'];
  jobImage: Scalars['String'];
  jobLocation: Scalars['String'];
  jobPostedOn: Scalars['String'];
  jobRegion: Scalars['String'];
  jobRequiredExpirience: Scalars['String'];
  jobRequirements_five: Scalars['String'];
  jobRequirements_four: Scalars['String'];
  jobRequirements_one: Scalars['String'];
  jobRequirements_three: Scalars['String'];
  jobRequirements_two: Scalars['String'];
  jobResponsibility_five: Scalars['String'];
  jobResponsibility_four: Scalars['String'];
  jobResponsibility_one: Scalars['String'];
  jobResponsibility_three: Scalars['String'];
  jobResponsibility_two: Scalars['String'];
  jobSalary: Scalars['String'];
  jobSpots: Scalars['String'];
  jobTitle: Scalars['String'];
  jobValidUntil: Scalars['String'];
  jobWorkHours: Scalars['String'];
};

export type JobInput = {
  _id: Scalars['ObjectId'];
  jobCategory: Scalars['String'];
  jobCompanyEmail: Scalars['String'];
  jobCompanyField: Scalars['String'];
  jobCompanyLocation: Scalars['String'];
  jobCompanyLogo: Scalars['String'];
  jobCompanyName: Scalars['String'];
  jobCompanyOffers_five: Scalars['String'];
  jobCompanyOffers_four: Scalars['String'];
  jobCompanyOffers_one: Scalars['String'];
  jobCompanyOffers_six: Scalars['String'];
  jobCompanyOffers_three: Scalars['String'];
  jobCompanyOffers_two: Scalars['String'];
  jobDescription: Scalars['String'];
  jobImage: Scalars['String'];
  jobLocation: Scalars['String'];
  jobPostedOn: Scalars['String'];
  jobRegion: Scalars['String'];
  jobRequiredExpirience: Scalars['String'];
  jobRequirements_five: Scalars['String'];
  jobRequirements_four: Scalars['String'];
  jobRequirements_one: Scalars['String'];
  jobRequirements_three: Scalars['String'];
  jobRequirements_two: Scalars['String'];
  jobResponsibility_five: Scalars['String'];
  jobResponsibility_four: Scalars['String'];
  jobResponsibility_one: Scalars['String'];
  jobResponsibility_three: Scalars['String'];
  jobResponsibility_two: Scalars['String'];
  jobSalary: Scalars['String'];
  jobSpots: Scalars['String'];
  jobTitle: Scalars['String'];
  jobValidUntil: Scalars['String'];
  jobWorkHours: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createJobApplication: JobApplication;
  createNewCv: UserCv;
  createUser: User;
  deleteCv: UserCv;
  deleteJobApplication: JobApplication;
  editCv: UserCv;
  editJobApplication: JobApplication;
  editUser: User;
  login: Scalars['String'];
  removeUser: User;
};


export type MutationCreateJobApplicationArgs = {
  data: NewJobArguments;
};


export type MutationCreateNewCvArgs = {
  data: UserCvArguments;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDeleteCvArgs = {
  _id: Scalars['String'];
};


export type MutationDeleteJobApplicationArgs = {
  _id: Scalars['String'];
};


export type MutationEditCvArgs = {
  _id: Scalars['String'];
  data: UserCvArgumentsEdit;
};


export type MutationEditJobApplicationArgs = {
  _id: Scalars['String'];
  data: EditJob;
};


export type MutationEditUserArgs = {
  _id: Scalars['String'];
  data: EditUserInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRemoveUserArgs = {
  _id: Scalars['String'];
};

export type NewJobArguments = {
  jobCategory: Scalars['String'];
  jobCompanyEmail: Scalars['String'];
  jobCompanyField: Scalars['String'];
  jobCompanyLocation: Scalars['String'];
  jobCompanyLogo: Scalars['String'];
  jobCompanyName: Scalars['String'];
  jobCompanyOffers_five: Scalars['String'];
  jobCompanyOffers_four: Scalars['String'];
  jobCompanyOffers_one: Scalars['String'];
  jobCompanyOffers_six: Scalars['String'];
  jobCompanyOffers_three: Scalars['String'];
  jobCompanyOffers_two: Scalars['String'];
  jobDescription: Scalars['String'];
  jobImage: Scalars['String'];
  jobLocation: Scalars['String'];
  jobPostedOn: Scalars['String'];
  jobRegion: Scalars['String'];
  jobRequiredExpirience: Scalars['String'];
  jobRequirements_five: Scalars['String'];
  jobRequirements_four: Scalars['String'];
  jobRequirements_one: Scalars['String'];
  jobRequirements_three: Scalars['String'];
  jobRequirements_two: Scalars['String'];
  jobResponsibility_five: Scalars['String'];
  jobResponsibility_four: Scalars['String'];
  jobResponsibility_one: Scalars['String'];
  jobResponsibility_three: Scalars['String'];
  jobResponsibility_two: Scalars['String'];
  jobSalary: Scalars['String'];
  jobSpots: Scalars['String'];
  jobTitle: Scalars['String'];
  jobValidUntil: Scalars['String'];
  jobWorkHours: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  currentUser: User;
  getAllCVs: Array<UserCv>;
  getAllJobs: Array<JobApplication>;
  getAllUsers: Array<User>;
  getCVbyID: UserCv;
  getJobById: JobApplication;
  getUserById: User;
};


export type QueryGetCVbyIdArgs = {
  _id: Scalars['String'];
};


export type QueryGetJobByIdArgs = {
  _id: Scalars['String'];
};


export type QueryGetUserByIdArgs = {
  _id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ObjectId'];
  aboutMe: Scalars['String'];
  cvs: Array<UserCv>;
  email: Scalars['String'];
  jobs: Array<JobApplication>;
  password: Scalars['String'];
  userCertificate_or_Education_five: Scalars['String'];
  userCertificate_or_Education_four: Scalars['String'];
  userCertificate_or_Education_one: Scalars['String'];
  userCertificate_or_Education_three: Scalars['String'];
  userCertificate_or_Education_two: Scalars['String'];
  userFirstName: Scalars['String'];
  userImage: Scalars['String'];
  userLastName: Scalars['String'];
  userLocationCity: Scalars['String'];
  userLocationState: Scalars['String'];
  userMiddleName: Scalars['String'];
  userPreviousJob_five: Scalars['String'];
  userPreviousJob_four: Scalars['String'];
  userPreviousJob_one: Scalars['String'];
  userPreviousJob_three: Scalars['String'];
  userPreviousJob_two: Scalars['String'];
  userProffesion: Scalars['String'];
  userSkills_five: Scalars['String'];
  userSkills_five_percent: Scalars['String'];
  userSkills_four: Scalars['String'];
  userSkills_four_percent: Scalars['String'];
  userSkills_one: Scalars['String'];
  userSkills_one_percent: Scalars['String'];
  userSkills_three: Scalars['String'];
  userSkills_three_percent: Scalars['String'];
  userSkills_two: Scalars['String'];
  userSkills_two_percent: Scalars['String'];
};

export type UserCv = {
  __typename?: 'UserCV';
  _id: Scalars['ObjectId'];
  date_of_birth: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  middle_name: Scalars['String'];
  user_education: Scalars['String'];
  user_email: Scalars['String'];
  user_location: Scalars['String'];
  user_proffesion: Scalars['String'];
  user_telephone: Scalars['String'];
};

export type UserCvArguments = {
  date_of_birth: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  middle_name: Scalars['String'];
  user_education: Scalars['String'];
  user_email: Scalars['String'];
  user_location: Scalars['String'];
  user_proffesion: Scalars['String'];
  user_telephone: Scalars['String'];
};

export type UserCvArgumentsEdit = {
  date_of_birth?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  middle_name?: InputMaybe<Scalars['String']>;
  user_education?: InputMaybe<Scalars['String']>;
  user_email?: InputMaybe<Scalars['String']>;
  user_location?: InputMaybe<Scalars['String']>;
  user_proffesion?: InputMaybe<Scalars['String']>;
  user_telephone?: InputMaybe<Scalars['String']>;
};

export type GetAllJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllJobsQuery = { __typename?: 'Query', getAllJobs: Array<{ __typename?: 'JobApplication', _id: any, jobCompanyName: string, jobImage: string, jobCompanyLocation: string, jobCompanyField: string, jobCompanyLogo: string, jobCompanyEmail: string, jobCompanyOffers_one: string, jobCompanyOffers_two: string, jobCompanyOffers_three: string, jobCompanyOffers_four: string, jobCompanyOffers_five: string, jobCompanyOffers_six: string, jobTitle: string, jobPostedOn: string, jobValidUntil: string, jobSpots: string, jobRequiredExpirience: string, jobRegion: string, jobLocation: string, jobCategory: string, jobSalary: string, jobWorkHours: string, jobDescription: string, jobResponsibility_one: string, jobResponsibility_two: string, jobResponsibility_three: string, jobResponsibility_four: string, jobResponsibility_five: string, jobRequirements_one: string, jobRequirements_two: string, jobRequirements_three: string, jobRequirements_four: string, jobRequirements_five: string }> };

export type GetJobByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetJobByIdQuery = { __typename?: 'Query', getJobById: { __typename?: 'JobApplication', _id: any, jobCompanyName: string, jobImage: string, jobCompanyLocation: string, jobCompanyField: string, jobCompanyLogo: string, jobCompanyEmail: string, jobCompanyOffers_one: string, jobCompanyOffers_two: string, jobCompanyOffers_three: string, jobCompanyOffers_four: string, jobCompanyOffers_five: string, jobCompanyOffers_six: string, jobTitle: string, jobPostedOn: string, jobValidUntil: string, jobSpots: string, jobRequiredExpirience: string, jobRegion: string, jobLocation: string, jobCategory: string, jobSalary: string, jobWorkHours: string, jobDescription: string, jobResponsibility_one: string, jobResponsibility_two: string, jobResponsibility_three: string, jobResponsibility_four: string, jobResponsibility_five: string, jobRequirements_one: string, jobRequirements_two: string, jobRequirements_three: string, jobRequirements_four: string, jobRequirements_five: string } };

export type CreateJobApplicationMutationVariables = Exact<{
  data: NewJobArguments;
}>;


export type CreateJobApplicationMutation = { __typename?: 'Mutation', createJobApplication: { __typename?: 'JobApplication', _id: any, jobCompanyName: string, jobImage: string, jobCompanyLocation: string, jobCompanyField: string, jobCompanyLogo: string, jobCompanyEmail: string, jobCompanyOffers_one: string, jobCompanyOffers_two: string, jobCompanyOffers_three: string, jobCompanyOffers_four: string, jobCompanyOffers_five: string, jobCompanyOffers_six: string, jobTitle: string, jobPostedOn: string, jobValidUntil: string, jobSpots: string, jobRequiredExpirience: string, jobRegion: string, jobLocation: string, jobCategory: string, jobSalary: string, jobWorkHours: string, jobDescription: string, jobResponsibility_one: string, jobResponsibility_two: string, jobResponsibility_three: string, jobResponsibility_four: string, jobResponsibility_five: string, jobRequirements_one: string, jobRequirements_two: string, jobRequirements_three: string, jobRequirements_four: string, jobRequirements_five: string } };

export type DeleteJobApplicationMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteJobApplicationMutation = { __typename?: 'Mutation', deleteJobApplication: { __typename?: 'JobApplication', _id: any } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', _id: any, userImage: string, userProffesion: string, userFirstName: string, userMiddleName: string, userLastName: string, email: string, userLocationCity: string, aboutMe: string, userSkills_one: string, userSkills_one_percent: string, userSkills_two: string, userSkills_two_percent: string, userSkills_three: string, userSkills_three_percent: string, userSkills_four: string, userSkills_four_percent: string, userSkills_five: string, userSkills_five_percent: string, userLocationState: string, userCertificate_or_Education_one: string, userCertificate_or_Education_two: string, userCertificate_or_Education_three: string, userCertificate_or_Education_four: string, userCertificate_or_Education_five: string, userPreviousJob_one: string, userPreviousJob_two: string, userPreviousJob_three: string, userPreviousJob_four: string, userPreviousJob_five: string } };

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: any, userImage: string, userProffesion: string, userFirstName: string, userMiddleName: string, userLastName: string, email: string, userLocationCity: string, aboutMe: string, userSkills_one: string, userSkills_one_percent: string, userSkills_two: string, userSkills_two_percent: string, userSkills_three: string, userSkills_three_percent: string, userSkills_four: string, userSkills_four_percent: string, userSkills_five: string, userSkills_five_percent: string, userLocationState: string, userCertificate_or_Education_one: string, userCertificate_or_Education_two: string, userCertificate_or_Education_three: string, userCertificate_or_Education_four: string, userCertificate_or_Education_five: string, userPreviousJob_one: string, userPreviousJob_two: string, userPreviousJob_three: string, userPreviousJob_four: string, userPreviousJob_five: string, password: string } };


export const GetAllJobsDocument = `
    query GetAllJobs {
  getAllJobs {
    _id
    jobCompanyName
    jobImage
    jobCompanyLocation
    jobCompanyField
    jobCompanyLogo
    jobCompanyEmail
    jobCompanyOffers_one
    jobCompanyOffers_two
    jobCompanyOffers_three
    jobCompanyOffers_four
    jobCompanyOffers_five
    jobCompanyOffers_six
    jobTitle
    jobPostedOn
    jobValidUntil
    jobSpots
    jobRequiredExpirience
    jobRegion
    jobLocation
    jobCategory
    jobSalary
    jobWorkHours
    jobDescription
    jobResponsibility_one
    jobResponsibility_two
    jobResponsibility_three
    jobResponsibility_four
    jobResponsibility_five
    jobRequirements_one
    jobRequirements_two
    jobRequirements_three
    jobRequirements_four
    jobRequirements_five
  }
}
    `;
export const useGetAllJobsQuery = <
      TData = GetAllJobsQuery,
      TError = unknown
    >(
      variables?: GetAllJobsQueryVariables,
      options?: UseQueryOptions<GetAllJobsQuery, TError, TData>
    ) =>
    useQuery<GetAllJobsQuery, TError, TData>(
      variables === undefined ? ['GetAllJobs'] : ['GetAllJobs', variables],
      fetchData<GetAllJobsQuery, GetAllJobsQueryVariables>(GetAllJobsDocument, variables),
      options
    );
export const GetJobByIdDocument = `
    query GetJobById($id: String!) {
  getJobById(_id: $id) {
    _id
    jobCompanyName
    jobImage
    jobCompanyLocation
    jobCompanyField
    jobCompanyLogo
    jobCompanyEmail
    jobCompanyOffers_one
    jobCompanyOffers_two
    jobCompanyOffers_three
    jobCompanyOffers_four
    jobCompanyOffers_five
    jobCompanyOffers_six
    jobTitle
    jobPostedOn
    jobValidUntil
    jobSpots
    jobRequiredExpirience
    jobRegion
    jobLocation
    jobCategory
    jobSalary
    jobWorkHours
    jobDescription
    jobResponsibility_one
    jobResponsibility_two
    jobResponsibility_three
    jobResponsibility_four
    jobResponsibility_five
    jobRequirements_one
    jobRequirements_two
    jobRequirements_three
    jobRequirements_four
    jobRequirements_five
  }
}
    `;
export const useGetJobByIdQuery = <
      TData = GetJobByIdQuery,
      TError = unknown
    >(
      variables: GetJobByIdQueryVariables,
      options?: UseQueryOptions<GetJobByIdQuery, TError, TData>
    ) =>
    useQuery<GetJobByIdQuery, TError, TData>(
      ['GetJobById', variables],
      fetchData<GetJobByIdQuery, GetJobByIdQueryVariables>(GetJobByIdDocument, variables),
      options
    );
export const CreateJobApplicationDocument = `
    mutation CreateJobApplication($data: NewJobArguments!) {
  createJobApplication(data: $data) {
    _id
    jobCompanyName
    jobImage
    jobCompanyLocation
    jobCompanyField
    jobCompanyLogo
    jobCompanyEmail
    jobCompanyOffers_one
    jobCompanyOffers_two
    jobCompanyOffers_three
    jobCompanyOffers_four
    jobCompanyOffers_five
    jobCompanyOffers_six
    jobTitle
    jobPostedOn
    jobValidUntil
    jobSpots
    jobRequiredExpirience
    jobRegion
    jobLocation
    jobCategory
    jobSalary
    jobWorkHours
    jobDescription
    jobResponsibility_one
    jobResponsibility_two
    jobResponsibility_three
    jobResponsibility_four
    jobResponsibility_five
    jobRequirements_one
    jobRequirements_two
    jobRequirements_three
    jobRequirements_four
    jobRequirements_five
  }
}
    `;
export const useCreateJobApplicationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateJobApplicationMutation, TError, CreateJobApplicationMutationVariables, TContext>) =>
    useMutation<CreateJobApplicationMutation, TError, CreateJobApplicationMutationVariables, TContext>(
      ['CreateJobApplication'],
      (variables?: CreateJobApplicationMutationVariables) => fetchData<CreateJobApplicationMutation, CreateJobApplicationMutationVariables>(CreateJobApplicationDocument, variables)(),
      options
    );
export const DeleteJobApplicationDocument = `
    mutation DeleteJobApplication($id: String!) {
  deleteJobApplication(_id: $id) {
    _id
  }
}
    `;
export const useDeleteJobApplicationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteJobApplicationMutation, TError, DeleteJobApplicationMutationVariables, TContext>) =>
    useMutation<DeleteJobApplicationMutation, TError, DeleteJobApplicationMutationVariables, TContext>(
      ['DeleteJobApplication'],
      (variables?: DeleteJobApplicationMutationVariables) => fetchData<DeleteJobApplicationMutation, DeleteJobApplicationMutationVariables>(DeleteJobApplicationDocument, variables)(),
      options
    );
export const LoginDocument = `
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['Login'],
      (variables?: LoginMutationVariables) => fetchData<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
      options
    );
export const CurrentUserDocument = `
    query CurrentUser {
  currentUser {
    _id
    userImage
    userProffesion
    userFirstName
    userMiddleName
    userLastName
    email
    userLocationCity
    aboutMe
    userSkills_one
    userSkills_one_percent
    userSkills_two
    userSkills_two_percent
    userSkills_three
    userSkills_three_percent
    userSkills_four
    userSkills_four_percent
    userSkills_five
    userSkills_five_percent
    userLocationState
    userCertificate_or_Education_one
    userCertificate_or_Education_two
    userCertificate_or_Education_three
    userCertificate_or_Education_four
    userCertificate_or_Education_five
    userPreviousJob_one
    userPreviousJob_two
    userPreviousJob_three
    userPreviousJob_four
    userPreviousJob_five
  }
}
    `;
export const useCurrentUserQuery = <
      TData = CurrentUserQuery,
      TError = unknown
    >(
      variables?: CurrentUserQueryVariables,
      options?: UseQueryOptions<CurrentUserQuery, TError, TData>
    ) =>
    useQuery<CurrentUserQuery, TError, TData>(
      variables === undefined ? ['CurrentUser'] : ['CurrentUser', variables],
      fetchData<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, variables),
      options
    );
export const CreateUserDocument = `
    mutation CreateUser($data: CreateUserInput!) {
  createUser(data: $data) {
    _id
    userImage
    userProffesion
    userFirstName
    userMiddleName
    userLastName
    email
    userLocationCity
    aboutMe
    userSkills_one
    userSkills_one_percent
    userSkills_two
    userSkills_two_percent
    userSkills_three
    userSkills_three_percent
    userSkills_four
    userSkills_four_percent
    userSkills_five
    userSkills_five_percent
    userLocationState
    userCertificate_or_Education_one
    userCertificate_or_Education_two
    userCertificate_or_Education_three
    userCertificate_or_Education_four
    userCertificate_or_Education_five
    userPreviousJob_one
    userPreviousJob_two
    userPreviousJob_three
    userPreviousJob_four
    userPreviousJob_five
    password
  }
}
    `;
export const useCreateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>) =>
    useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>(
      ['CreateUser'],
      (variables?: CreateUserMutationVariables) => fetchData<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, variables)(),
      options
    );