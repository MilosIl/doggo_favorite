// import styles from './BaseTemplate.module.css'
export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className="bg-pink-500">{sampleTextProp}</div>;
};

export default BaseTemplate;
