import { EntityState } from '@reduxjs/toolkit';

export enum LOADING_STATUS {
  pending = 'pending',
  request = 'request',
  success = 'success',
  error = 'error',
}

export interface TodoEntity {
  id: number;
  title: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoState extends EntityState<TodoEntity> {
  loadingStatus: LOADING_STATUS;
  error?: string | null;
}
