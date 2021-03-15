/* eslint-disable prettier/prettier */
import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

interface Lesson {
  id: string
  name: string
  duration: number
  course_id: string
  description: string
  video_id: string
}

interface ExportProps {
  lessons: Lesson[]
  setLessons: Dispatch<SetStateAction<Lesson[]>>
}

interface CourseProviderProps {
  children: ReactNode
}

const CourseContext = createContext({} as ExportProps);

export function CourseProvider ({ children }: CourseProviderProps) {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  return (
    <CourseContext.Provider value={{ lessons, setLessons }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourses() {
  const context = useContext(CourseContext);
  const { lessons, setLessons } = context;

  return { lessons, setLessons };
}
