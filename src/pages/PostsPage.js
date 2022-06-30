import Card from '../components/Card/Card';

function PostsPage() {
  return (
    <div className='container'>
      <h1 className='display-4 py-4'>Our Posts</h1>
      <div className='d-flex flex-wrap gap-1'>
        <Card title='title' date='2017-01-01' content='very very impotant content' />
      </div>
    </div>
  );
}

export default PostsPage;
