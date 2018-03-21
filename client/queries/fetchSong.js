//Just fetch a particular song

import gql from 'graphql-tag';

export default gql`

query SongQuery($id:ID!){
  song(id:$id){
    title
    id
  }
}

`;