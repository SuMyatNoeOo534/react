'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Stack,
} from '@mui/material';

export default function TodoListPage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [changedTask, setChangedTask] = useState('');
  const [taskIndex, setTaskIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  const updateTask = () => {
    if (changedTask.trim()) {
      setTasks(
        tasks.map((task, index) => (index === taskIndex ? changedTask : task))
      );
      setChangedTask('');
      setTaskIndex(null);
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        To Do List
      </Typography>

      {/* Add Task */}
      <Stack direction="row" spacing={2} mb={2}>
        <TextField
          label="Task Name"
          variant="outlined"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button variant="contained" color="success" onClick={addTask}>
          Add Task
        </Button>
      </Stack>

      {/* Edit Task */}
      {taskIndex !== null && (
        <Stack direction="row" spacing={2} mb={2}>
          <TextField
            label="Edit Task"
            variant="outlined"
            value={changedTask}
            onChange={(e) => setChangedTask(e.target.value)}
          />
          <Button variant="contained" color="warning" onClick={updateTask}>
            Update Task
          </Button>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => {
              setTaskIndex(null);
              setChangedTask('');
            }}
          >
            Cancel
          </Button>
        </Stack>
      )}

      {/* Task List Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Task</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <TableRow key={index}>
                  <TableCell>{task}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          setTaskIndex(index);
                          setChangedTask(task);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => removeTask(index)}
                      >
                        Remove
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2}>No tasks available</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
