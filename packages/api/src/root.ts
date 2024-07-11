import { authRouter } from "./router/auth";
import { campRouter } from "./router/camp";
import { eventRouter } from "./router/event";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  camp: campRouter,
  event: eventRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;