import ReactHtmlParser from 'react-html-parser';
const CommonStringParser = ({dangerHtml}) => {
  return ReactHtmlParser(dangerHtml)
};
export default CommonStringParser;
