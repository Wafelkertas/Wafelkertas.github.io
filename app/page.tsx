
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';
// import TanMania from '../public/tanmania_webp/1webp.webp';
export const revalidate = 60;
import glob from 'glob';
import PortopolioData from './data/data.json'

export default async function HomePage() {
  const jsonData = PortopolioData;
  let starCount, views, tweetCount;

 

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">

        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <h1 className=' text-2xl font-bold pb-5 pt-10 text-neutral-800 dark:text-neutral-200'>My Portopolio</h1>
      <div className="flex flex-col">
        {jsonData.map((data, index) => <ShowcaseComponent projectName={data.projectName} description={data.description} containerColor={data.containerColor} textColor={data.textColor} index={index}/>)}
      </div>
    </section>
  );
}
interface PortopolioProps {
  projectName: string;
  description: string;
  containerColor: string;
  textColor: string;
  index:number;
}
const getImageFiles = (projectName: string) => {

  const imageFolderPath = `public/${projectName}/`;

  const imageFiles = glob.sync(`${imageFolderPath}/*.{jpg,jpeg,png,gif,svg,webp}`);

  return imageFiles.map((fileName) => {
    
    const cleanedPath = fileName.replace("public/", "");
    console.log(`/${cleanedPath}`)
    return `/${cleanedPath}`
  });

};





const ShowcaseComponent: React.FC<PortopolioProps> = (props: PortopolioProps) => {
  const items: string[] = getImageFiles(props.projectName);

  const itemsPerColumn = 5;
  const columns = splitItemsIntoColumns(items, itemsPerColumn);

  // Add Theme Color Based on Project Theme
  const containerColor = {
    0: "bg-blue-500",
    1: 'bg-orange-300',
  }
  const textColor = {
    0: "text-white",
    1: 'text-black',
  }
  const containerClasses = `flex flex-col ${containerColor[props.index]} ${textColor[props.index]} rounded-lg p-4 mb-10 shadow-lg`;
  
  return (
    <div key={props.projectName} className={containerClasses}>
      <h1 className='text-lg font-bold'>{props.projectName.charAt(0).toUpperCase() + props.projectName.slice(1)}</h1>
      <a className="pb-5">{props.description} </a>
      <div className="mb-20">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex space-x-2">
            {column.map((item, itemIndex) => (
              <div key={itemIndex} className="mb-8">
                <Image src={item} alt={`$itemIndex`} width="150" height="300" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div >
  );
};

const splitItemsIntoColumns = (items: any[], itemsPerColumn: number): any[][] => {
  const columns: any[][] = [];
  let column: any[] = [];

  for (let i = 0; i < items.length; i++) {
    column.push(items[i]);

    if (column.length === itemsPerColumn) {
      columns.push(column);
      column = [];
    }
  }

  // Push the remaining items into the last column
  if (column.length > 0) {
    columns.push(column);
  }

  return columns;
};