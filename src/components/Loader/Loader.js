import { ColorRing } from 'react-loader-spinner';
function Loader() {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#008080', '#269393', '#40a0a0', '#80c0c0', '#b3d9d9']}
    />
  );
}
export default Loader;
