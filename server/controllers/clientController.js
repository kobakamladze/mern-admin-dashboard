import User from '../models/UserModel.js';
import getCountryIso3 from 'country-iso-2-to-3';

class ClientController {
  async getGeography(req, res) {
    const users = await User.find({}, { country: 1, _id: 1 });

    const groupedUsersByLocation = users.reduce((acc, { country }) => {
      const countryISO3 = getCountryIso3(country);
      if (!acc[countryISO3]) acc[countryISO3] = 0;
      acc[countryISO3] += 1;

      return acc;
    }, {});

    const mappedLoactions = Object.entries(groupedUsersByLocation).map(
      ([country, value]) => ({ id: country, value })
    );

    res.json(mappedLoactions);
  }
}

export default new ClientController();
