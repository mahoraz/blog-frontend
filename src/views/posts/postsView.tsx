import React from 'react';
import Card from '../../components/card/Card';
import View from '../../components/view/View';
import styled from "styled-components";


const CardContainer = styled.div`
  margin: 14px;
`;

export default function PostsView() {
  // [0,1,2,3,4,5,6,7,8,9]
  const list = Array.from(Array(10).keys());

    return(
      <View>
        <h2>Posts Page</h2>
        {list.map((index)=>
        <CardContainer>
          <Card>
            <h3>Header {index}</h3>
            <p>
              In volutpat nulla metus, id laoreet dui ornare ut. 
              Etiam nec odio vitae turpis vestibulum vulputate at non ligula. 
              Vestibulum consectetur mi rhoncus diam congue interdum. Nullam
              eu laoreet massa, quis facilisis ligula. Suspendisse potenti.
            </p>
          </Card>
        </CardContainer>
        )}
      </View>
    );
}