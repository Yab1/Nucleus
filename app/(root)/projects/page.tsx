"use client";

import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Progress,
  Rating,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { IconType } from "react-icons";
import {
  PiCircleBold,
  PiSquareBold,
  PiStarBold,
  PiTriangleBold,
  PiBookmarkSimpleBold,
  PiBookmarkSimpleFill,
  PiDotsThreeBold,
  PiArchiveBoxFill,
} from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface Project {
  id: number;
  title: string;
  description: string;
  progress: number;
  avater: IconType;
  color: string;
  lastModified: string;
  favorite: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Task Tracker",
    description: "A simple application to track your daily tasks.",
    progress: 80,
    avater: PiCircleBold,
    color: "blue",
    lastModified: "3 days ago",
    favorite: false,
  },
  {
    id: 2,
    title: "Expense Manager",
    description: "Manage your expenses and track your budget.",
    progress: 65,
    avater: PiSquareBold,
    color: "green",
    lastModified: "5 hours ago",
    favorite: true,
  },
  {
    id: 3,
    title: "Fitness App",
    description: "Track your workouts and set fitness goals.",
    progress: 90,
    avater: PiTriangleBold,
    color: "orange",
    lastModified: "2 weeks ago",
    favorite: false,
  },
  {
    id: 4,
    title: "Recipe Book",
    description: "Collect and organize your favorite recipes.",
    progress: 50,
    avater: PiSquareBold,
    color: "red",
    lastModified: "1 day ago",
    favorite: true,
  },
  {
    id: 5,
    title: "Book Library",
    description: "Catalog your book collection and track reading progress.",
    progress: 75,
    avater: PiCircleBold,
    color: "purple",
    lastModified: "4 days ago",
    favorite: false,
  },
  {
    id: 6,
    title: "Weather App",
    description: "Get real-time weather updates for your location.",
    progress: 85,
    avater: PiTriangleBold,
    color: "cyan",
    lastModified: "1 hour ago",
    favorite: true,
  },
  {
    id: 7,
    title: "Portfolio Website",
    description: "Build a personal portfolio website to showcase your skills.",
    progress: 60,
    avater: PiSquareBold,
    color: "teal",
    lastModified: "2 months ago",
    favorite: false,
  },
  {
    id: 8,
    title: "Music Player",
    description: "Create a simple music player with playlist functionality.",
    progress: 70,
    avater: PiStarBold,
    color: "pink",
    lastModified: "3 days ago",
    favorite: true,
  },
  {
    id: 9,
    title: "Chat Application",
    description:
      "Develop a real-time chat application with user authentication.",
    progress: 80,
    avater: PiCircleBold,
    color: "brown",
    lastModified: "5 minutes ago",
    favorite: false,
  },
  {
    id: 10,
    title: "To-Do List",
    description: "Build a task management system with priority levels.",
    progress: 95,
    avater: PiStarBold,
    color: "indigo",
    lastModified: "1 week ago",
    favorite: true,
  },
];

export default function Projects() {
  const darkMode = useSelector((state: RootState) => state.ui.darkMode);

  return (
    <section className="grid grid-cols-3 gap-5">
      {projects.map(
        ({
          id,
          title,
          description,
          progress,
          avater,
          color,
          lastModified,
          favorite,
        }) => {
          const Avater = avater;

          return (
            <Card
              key={id}
              placeholder={undefined}
              className="cursor-pointer dark:bg-dark-secondary"
              onClick={() => {
                alert("Clicked Card");
              }}
            >
              <CardBody placeholder={undefined} className="flex flex-col gap-3">
                <div className="flex">
                  <div className="bg-light-primary p-3 w-fit rounded-md dark:bg-dark-tertiary">
                    <Avater size={20} color={color} />
                  </div>

                  <Tooltip
                    placement="bottom"
                    content="Bookmark Project"
                    className="bg-light-secondary text-light-secondary dark:bg-dark-tertiary dark:text-dark-secondary"
                  >
                    <IconButton
                      placeholder={undefined}
                      variant="text"
                      className="ml-auto"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert("Star Clicked");
                      }}
                    >
                      {favorite ? (
                        <PiBookmarkSimpleFill size={20} color="yellow" />
                      ) : (
                        <PiBookmarkSimpleBold size={20} color="gray" />
                      )}
                    </IconButton>
                  </Tooltip>

                  <Menu>
                    <MenuHandler>
                      <Tooltip
                        placement="bottom"
                        content="Menu"
                        className="bg-light-secondary text-light-secondary dark:bg-dark-tertiary dark:text-dark-secondary"
                      >
                        <IconButton placeholder={undefined} variant="text">
                          <PiDotsThreeBold
                            size={20}
                            color={darkMode ? "white" : "black"}
                          />
                        </IconButton>
                      </Tooltip>
                    </MenuHandler>

                    <MenuList
                      placeholder={undefined}
                      className="dark:bg-dark-tertiary dark:border-dark-primary"
                    >
                      <MenuItem
                        placeholder={undefined}
                        className="flex items-center gap-2 dark:text-dark-secondary dark:hover:bg-dark-secondary dark:hover:text-dark-tertiary"
                      >
                        <PiArchiveBoxFill size={20} />
                        <Typography
                          placeholder={undefined}
                          variant="small"
                          className="font-medium"
                        >
                          Arhive
                        </Typography>
                      </MenuItem>

                      <MenuItem
                        placeholder={undefined}
                        className="flex items-center gap-2 dark:text-dark-secondary dark:hover:bg-dark-secondary dark:hover:text-dark-tertiary"
                      >
                        <PiArchiveBoxFill size={20} />
                        <Typography
                          placeholder={undefined}
                          variant="small"
                          className="font-medium dark:hover:text-dark-tertiary"
                        >
                          Delete
                        </Typography>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>

                <Typography
                  placeholder={undefined}
                  variant="h6"
                  className="text-light-primary dark:text-white"
                >
                  {title}
                </Typography>

                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="h-16 dark:text-dark-tertiary"
                >
                  {description}
                </Typography>

                <Tooltip
                  content={`${progress}% completed`}
                  className="bg-light-secondary text-light-secondary dark:bg-dark-tertiary dark:text-dark-secondary"
                >
                  <Progress
                    placeholder={undefined}
                    size="sm"
                    value={progress}
                    color="deep-purple"
                    className="dark:bg-dark-tertiary"
                  />
                </Tooltip>

                <div className="flex justify-between items-center mt-2">
                  <div>
                    <Tooltip
                      content="Last modified"
                      className="bg-light-secondary text-light-secondary dark:bg-dark-tertiary dark:text-dark-secondary"
                    >
                      <Typography
                        placeholder={undefined}
                        variant="small"
                        className="dark:text-dark-tertiary"
                      >
                        {lastModified}
                      </Typography>
                    </Tooltip>
                  </div>

                  <div className="flex items-center -space-x-4">
                    <Tooltip
                      placeholder={undefined}
                      content="Alexander Hipp"
                      className="bg-light-secondary text-light-secondary dark:bg-dark-tertiary dark:text-dark-secondary"
                    >
                      <Avatar
                        placeholder={undefined}
                        variant="circular"
                        alt="user 1"
                        size="sm"
                        className="border-2 border-white hover:z-10 focus:z-10 dark:border-dark-primary"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      />
                    </Tooltip>

                    <Tooltip
                      placeholder={undefined}
                      content="Alexander Hipp"
                      className="bg-light-secondary text-light-secondary dark:bg-dark-tertiary dark:text-dark-secondary"
                    >
                      <Avatar
                        placeholder={undefined}
                        variant="circular"
                        alt="user 2"
                        size="sm"
                        className="border-2 border-white hover:z-10 focus:z-10 dark:border-dark-primary"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                      />
                    </Tooltip>

                    <Tooltip
                      placeholder={undefined}
                      content="Alexander Hipp"
                      className="bg-light-secondary text-light-secondary dark:bg-dark-tertiary dark:text-dark-secondary"
                    >
                      <Avatar
                        placeholder={undefined}
                        variant="circular"
                        alt="user 3"
                        size="sm"
                        className="border-2 border-white hover:z-10 focus:z-10 dark:border-dark-primary"
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                      />
                    </Tooltip>

                    <Tooltip
                      placeholder={undefined}
                      content="Alexander Hipp"
                      className="bg-light-secondary text-light-secondary dark:bg-dark-tertiary dark:text-dark-secondary"
                    >
                      <Avatar
                        placeholder={undefined}
                        variant="circular"
                        alt="user 4"
                        size="sm"
                        className="border-2 border-white hover:z-10 focus:z-10 dark:border-dark-primary"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                      />
                    </Tooltip>

                    <Tooltip
                      placeholder={undefined}
                      content="Alexander Hipp"
                      className="bg-light-secondary text-light-secondary dark:bg-dark-tertiary dark:text-dark-secondary"
                    >
                      <Avatar
                        placeholder={undefined}
                        variant="circular"
                        alt="user 5"
                        size="sm"
                        className="border-2 border-white hover:z-10 focus:z-10 dark:border-dark-primary"
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
                      />
                    </Tooltip>
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        }
      )}
    </section>
  );
}
