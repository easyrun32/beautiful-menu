const users: any = {};

export const startSocket = (io: any) => {
  io.on("connection", (socket: any) => {
    socket.on("new-user", (user: { id: number }) => {
      users[socket.id] = user.id;
    });

    socket.on("disconnect", (reason: any) => {
      console.log(`user: ${users[socket.id]} disconnected, ${reason}`);
      delete users[socket.id];
    });
    console.log(users);
  });
};
