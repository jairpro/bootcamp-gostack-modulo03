/* eslint-disable eqeqeq */
import User from '../models/User';
import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    /**
     * Check if user is a provider
     */
    const checkIsProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkIsProvider) {
      return res
        .status(401)
        .json({ error: 'Only providers can load notifications' });
    }

    const notifications = await Notification.find({
      user: req.userId,
    })
      // .sort({ createdAt: -1 }) // ordem decrescente em outro formato
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {
    /**
     * Check if user is a provider
     */
    const checkIsProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkIsProvider) {
      return res
        .status(401)
        .json({ error: 'Only providers can mark as read notifications' });
    }

    const { id } = req.params;

    /**
     * Check if notification exists
     */
    const notificationExists = await Notification.findById(id);
    if (!notificationExists) {
      return res.status(400).json({ error: 'Notification not found' });
    }

    /**
     * checks if the user is the recipient of the notification
     */
    if (req.userId != notificationExists.user) {
      return res
        .status(401)
        .json({ error: 'This notification is of another provider' });
    }

    /**
     * Option to mark the notification as read or unread
     */
    const read = req.body.read === undefined ? true : req.body.read;

    /*
    // Caso se queira validar quando se tenta marcar como lida uma notificação já lida
    if (read && notificationExists.read) {
      return res
        .status(401)
        .json({ error: 'this notification has already been read' });
    }

    // E vice-versa
    if (!read && !notificationExists.read) {
      return res
        .status(401)
        .json({ error: 'this notification has not yet been read' });
    }
    */

    /*
    // Como já se fez uma busca usando FindOne logo acima
    // O lógico seria aplicar apenas update
    // porém o dados de retorno são diferentes dos dados usados em aula
    const result = await Notification.updateOne(
      { _id: req.params.id },
      { read: true }
    );
    // Retorna:
    //  {
    //    "n": 1,
    //    "nModified": 1,
    //    "ok": 1
    //  }
    */

    // para ter o mesmos dados de retorno usado na aula
    // Chama find novamente e update
    const notification = await Notification.findByIdAndUpdate(
      id,
      { read },
      { new: true }
    );

    return res.json(notification);
  }
}

export default new NotificationController();
