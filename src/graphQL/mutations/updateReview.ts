import { ApolloError, gql, useMutation } from '@apollo/client';

import { GET_REVIEWS } from '../queries';

import {
  GetReviewsQueryInput,
  UpdateReviewMutationInput,
} from './../types/input.type';

export const UPDATE_REVIEW = gql`
  mutation UpdateReview($input: UpdateReviewInput!) {
    updateReview(input: $input) {
      id
      contents
      finishedAt
      startedAt
      createdAt
      updatedAt
    }
  }
`;

type UseUpdateReviewMutation = {
  updateReview: (input: UpdateReviewMutationInput) => void;
  loading: boolean;
  error?: ApolloError;
};

type Variables = {
  input: UpdateReviewMutationInput;
};

export const useUpdateReviewMutation = (
  getReviewsQueryInput: GetReviewsQueryInput,
): UseUpdateReviewMutation => {
  const [updateReviewMutation, { loading, error }] = useMutation<
    void,
    Variables
  >(UPDATE_REVIEW, {
    refetchQueries: [
      {
        query: GET_REVIEWS,
        variables: {
          input: getReviewsQueryInput,
        },
      },
    ],
    onError: (err) => {
      console.log('updateReviewMutation');
      console.log(err.message);
    },
  });

  const updateReview = (input: UpdateReviewMutationInput) => {
    updateReviewMutation({
      variables: {
        input,
      },
    });
  };

  return { updateReview, loading, error };
};
