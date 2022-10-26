import React from 'react';
import CourseCard from '~/components/shared/CourseCard';

const CoursesScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-200 flex w-full px-5 flex-col md:flex-row">
      <div className="md:w-1/5 p-2 pb-5 rounded min-w-80 w-full">
        <ul className="menu bg-base-100 p-2 rounded-box w-full h-full">
          <li className="menu-title">
            <span>Category</span>
          </li>
          <li>
            <a className="active">Programming</a>
          </li>
          <li>
            <a>Business</a>
          </li>
        </ul>
      </div>
      <div className="md:w-4/5 w-full p-2 pt-4 pb-5 rounded-lg bg-base-100">
        <div className="flex justify-center flex-wrap">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default CoursesScreen;
