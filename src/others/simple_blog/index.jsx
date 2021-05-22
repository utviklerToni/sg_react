import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';
import faker from 'faker';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
	return (
		<div className='ui container comments'>
			<ApprovalCard>
				<CommentDetail
					author={`timmy`}
					commentText={`Hi there, just checking my commentzzzzz`}
					typedTime={`today at 6am`}
					proImg={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author={`clyde`}
					commentText={`eric must be at KFC`}
					typedTime={`today at 6am`}
					proImg={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={`nathan`}
					commentText={`shut up mimsyy`}
					typedTime={`today at 6am`}
					proImg={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={`eric`}
					commentText={`all i really did was to leave her`}
					typedTime={`today at 6am`}
					proImg={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={`stan`}
					commentText={`i hate jews`}
					typedTime={`today at 6am`}
					proImg={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={`kenny`}
					commentText={`hey i just woke up`}
					typedTime={`today at 7am`}
					proImg={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
