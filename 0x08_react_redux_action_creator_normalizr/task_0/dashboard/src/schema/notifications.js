import React from 'react';
import * as notifications from '../../../../notifications.json';

const getAllNotificationsByUser = (userId) =>
  notifications.filter((author) => author.id === userId);

export default getAllNotificationsByUser;
