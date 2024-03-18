/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChallengesInfo = /* GraphQL */ `
  query GetChallengesInfo($id: ID!) {
    getChallengesInfo(id: $id) {
      id
      ProjectName
      ShortInfo
      Category
      Customer
      AWSServices
      ProjectPic
      ProjectInfoURL
      Highlight
      Demo
      github
      approach
      ProjectName_es
      Category_es
      approach_es
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listChallengesInfos = /* GraphQL */ `
  query ListChallengesInfos(
    $filter: ModelChallengesInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallengesInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ProjectName
        ShortInfo
        Category
        Customer
        AWSServices
        ProjectPic
        ProjectInfoURL
        Highlight
        Demo
        github
        approach
        ProjectName_es
        Category_es
        approach_es
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
