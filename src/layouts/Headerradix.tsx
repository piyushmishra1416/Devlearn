import { useEffect, useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../config.js';



const NavigationMenuDemo = () => {
   const [user, setUser] = useState("");
   useEffect(() => {
     axios
       .get(`${baseURL}me`, {
         headers: {
           Authorization: "Bearer " + localStorage.getItem("token"),
         },
       })
       .then((res) => {
         setUser(res.data.username);
       
         console.log("hello");
       });
     
   }, );
   const navigate = useNavigate();

  return (
    <NavigationMenu.Root className="relative z-[1500] flex w-screen justify-center bg-blend-lighten mb-10 pb-10 " style = {{background: "transparent", position:"fixed",  backgroundBlendMode: "lighten" , }}>
      
      <NavigationMenu.List className="center shadow-blackA4 m-0 flex list-none rounded-[6px] bg-black  p-1 shadow-[0_2px_10px]">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-white hover:text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Courses{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="focus:shadow-violet7 from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >
                    <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                      Radix Primitives
                    </div>
                    <p className="text-mauve4 text-[14px] leading-[1.3]">
                      Unstyled, accessible components for React.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

            
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-white hover:text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Account{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
            {user ? (
          <div>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate('/'); 
               
                window.location.reload(); 
              }}
            >
              Logout
            </button>
           
          </div>
        ) : (
          <div className="px-2">
            {" "}
            <ul className="flex ml-auto ">
              <li className="px-2">
                <Button variant="contained" className="w-24">
                  {" "}
                  <a href="/login">Login</a>{" "}
                </Button>
              </li>
              <li>
                <Button variant="contained" className="w-24">
                  {" "}
                  <a href="/register">Register</a>{" "}
                </Button>
              </li>
            </ul>
          </div>)}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="https://github.com/radix-ui"
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item> */}

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

// const ListItem = React.forwardRef(function ({ className, children, title, ...props }, forwardedRef) {
//   return React.createElement('li', null,
//     React.createElement(NavigationMenu.Link, { asChild: true },
//       React.createElement('a', {
//         className: classNames(
//           'focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors',
//           className
//         ),
//         ...props,
//         ref: forwardedRef,
//       },
//         React.createElement('div', { className: 'text-violet12 mb-[5px] font-medium leading-[1.2]' }, title),
//         React.createElement('p', { className: 'text-mauve11 leading-[1.4]' }, children)
//       )
//     )
//   );
// });


export default NavigationMenuDemo;