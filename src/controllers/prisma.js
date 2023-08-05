const { PrismaClient, role } = require('@prisma/client')


const prisma = new PrismaClient()

exports.hanldlerGetAllUser = async (req, res) => {
  try {
    const users = await prisma.user.findMany()

    res.status(200).send(users);

  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

exports.handleCreateUser = async (req, res) => {
  try {
    const data = req.body;

    const newUser = await prisma.user.create({
      data: {
        fullname: data.fullname,
        address: data.address,
        email: data.email,
        phone: data.phone,
        role: data.role
      }
    })

    res.status(201).send(newUser);

  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}


exports.handleUpdateUser = async (req, res) => {
  try {
    const data = req.body;

    const updateUser = await prisma.user.update({
      where: { id: data.id },
      data: {
        fullname: data.fullname,
        address: data.address,
        email: data.email,
        phone: data.phone,
        role: data.role
      },
    })

    res.status(200).send(updateUser);

  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

exports.handleDeleteUser = async (req, res) => {
  try {
    const data = req.body;

    const deleteUser = await prisma.user.delete({
      where: { id: data.id }
    });

    res.status(200).send(deleteUser)

  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}