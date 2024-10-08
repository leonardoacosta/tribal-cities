import { announcementRouter } from "./router/announcement";
import { authRouter } from "./router/auth";
import { burnRouter } from "./router/burn";
import { campRouter } from "./router/camp";
import { cityPlanningRouter } from "./router/city-planning";
import { eventRouter } from "./router/event";
import { userRouter } from "./router/user";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  announcement: announcementRouter,
  auth: authRouter,
  burn: burnRouter,
  camp: campRouter,
  cityPlanning: cityPlanningRouter,
  event: eventRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
