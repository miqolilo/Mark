import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const orders = [
  {
    id: uuid(),
    ref: '23412355-2',
    amount: 30.5,
    customer: {
      name: 'Adam Denisov'
    },
    createdAt: 1555016400000,
    status: 'Delivered'
  },
  {
    id: uuid(),
    ref: '23412355-2',
    amount: 25.1,
    customer: {
      name: 'Ainara Vergara'
    },
    createdAt: 1555016400000,
    status: 'Pending'
  },
  {
    id: uuid(),
    ref: '23412355-2',
    amount: 10.99,
    customer: {
      name: 'Chioke Okonkwo'
    },
    createdAt: 1554930000000,
    status: 'Refund'
  },
  {
    id: uuid(),
    ref: '23412355-2',
    amount: 96.43,
    customer: {
      name: 'Erin Green'
    },
    createdAt: 1554757200000,
    status: 'Delivered'
  },
  {
    id: uuid(),
    ref: '23412355-2',
    amount: 32.54,
    customer: {
      name: 'Iruka Akuchi'
    },
    createdAt: 1554670800000,
    status: 'Delivered'
  },
  {
    id: uuid(),
    ref: '23412355-2',
    amount: 16.76,
    customer: {
      name: 'Iruka Akuchi'
    },
    createdAt: 1554670800000,
    status: 'Delivered'
  }
];

const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Latest Orders" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Order Ref
              </TableCell>
              <TableCell>
                Customer
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.ref}
                </TableCell>
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                  {moment(order.createdAt).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>
                  <Chip
                    color="primary"
                    label={order.status}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default LatestOrders;
