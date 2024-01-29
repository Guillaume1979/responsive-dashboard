export const orders: Order[] = [
  {
    name: 'Javascript Tutorial',
    number: 85743,
    payment: 'Due',
    status: 'Pending'
  },
  {
    name: 'CSS Full Course',
    number: 97245,
    payment: 'Refunded',
    status: 'Declined'
  },
  {
    name: 'Flex-Box Tutorial',
    number: 36452,
    payment: 'Paid',
    status: 'Active'
  }
];

export type Order = {
  name: string,
  number: number,
  payment: 'Paid' | 'Refunded' | 'Due',
  status: 'Active' | 'Pending' | 'Declined'
}

export const users: User[] = [
  {
    name: 'Jack',
    lastConnection: '54 Min Ago'
  },
  {
    name: 'Amir',
    lastConnection: '3 Hours Ago'
  },
  {
    name: 'Ember',
    lastConnection: '6 Hours Ago'
  }

];

export type User = {
  name: string;
  lastConnection: string;
}
