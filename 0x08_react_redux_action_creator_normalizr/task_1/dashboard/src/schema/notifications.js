import React from 'react';
import { normalize, schema } from 'normalizr';
import * as notifications from '../../../../notifications.json';

// define a users schema
const user = new schema.Entity('users');

// define comments schema
const message = new schema.Entity('messages', { idAttribute: 'guid' });

// define notifications schema
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedData = normalize(notifications, notification);

const getAllNotificationsByUser = (userId) =>
  notifications.filter((author) => author.id === userId);

export default getAllNotificationsByUser;
