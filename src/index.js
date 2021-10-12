import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const TestComp = () => {
    return (
        <h1>My name is Prashant !</h1>
    );
}
const App = () => {
    return (
        <div>
            <TestComp />
            <div className="ui container comments">
                <ApprovalCard >
                    hi there !
                    <CommentDetail author={faker.name.findName()} date={faker.date.recent().toLocaleDateString()} text={faker.lorem.text().substr(0, 30)} avatar={faker.image.avatar()} />
                </ApprovalCard>
                <ApprovalCard >
                    <CommentDetail author={faker.name.findName()} date={faker.date.recent().toLocaleDateString()} text={faker.lorem.text().substr(0, 30)} avatar={faker.image.avatar()} />
                </ApprovalCard>
                <ApprovalCard >
                    <CommentDetail author={faker.name.findName()} date={faker.date.recent().toLocaleDateString()} text={faker.lorem.text().substr(0, 30)} avatar={faker.image.avatar()} />
                </ApprovalCard>
                <ApprovalCard >
                    <CommentDetail author={faker.name.findName()} date={faker.date.recent().toLocaleDateString()} text={faker.lorem.text().substr(0, 30)} avatar={faker.image.avatar()} />
                </ApprovalCard>
                <CommentDetail author={faker.name.findName()} date={faker.date.recent().toLocaleDateString()} text={faker.lorem.text().substr(0, 30)} avatar={faker.image.avatar()} />

            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));