import { TaskModel } from '../models/TaskModel';

export const getTaskStatus = (
  task: TaskModel,
  activeTask: TaskModel | null,
): string => {
  const statusChecks: [boolean, string][] = [
    [!!task.completeDate, 'Completa'],
    [!!task.interruptDate, 'Incompleta'],
    [task.id === activeTask?.id, 'Em progresso'],
  ];

  return statusChecks.find(([condition]) => condition)?.[1] ?? 'Abandonada';
};
