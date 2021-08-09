import taskModel from "./task";
export default interface RootState {
  entities: {
    tasks: taskModel[];
  };
}
