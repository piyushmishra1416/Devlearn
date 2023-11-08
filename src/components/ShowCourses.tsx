import  { useState, useEffect } from "react";

interface Course {
  id: number;
  title: string;
}

interface ShowCoursesProps {
  title: string;
}

function ShowCourses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:3000/admin/courses', {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCourses(data.courses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="showcourses">
      <h1>Courses</h1>
      {courses.map(course => <Course key={course.id} title={course.title} />)}
    </div>
  );
}

function Course(props: ShowCoursesProps) {
  return <div>
    <h1>{props.title}</h1>
  </div>
}

export default ShowCourses;
