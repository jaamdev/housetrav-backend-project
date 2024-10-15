import connection from '#Config/db.js';

export default class PortalModel {
  static getAll = async () => {
    try {
      const [result] = await connection.query(
        'SELECT BIN_TO_UUID(id) AS id, visible, title, address, region, country, property_hide_address AS propertyHideAddress, rent_price AS rentPrice, sell_price AS sellPrice, rooms, baths, property_size AS propertySize, property_size_terrain AS propertySizeTerrain, property_type AS propertyType, conditions_specials AS conditionsSpecials FROM properties WHERE visible = true ORDER BY created_at DESC LIMIT 10;',
      );
      return result;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  static getId = async ({ id }) => {
    try {
      const [fileNames] = await connection.query(
        'SELECT img_url AS imgUrl FROM properties_images WHERE property_id = UUID_TO_BIN(?);',
        [id],
      );
      const [result] = await connection.query(
        'SELECT BIN_TO_UUID(p.id) AS id, p.visible, p.title, p.description, p.conditions_specials AS conditionsSpecials, p.address, p.postal, p.city, p.country, p.region, p.property_hide_address AS propertyHideAddress, p.rent_sell AS rentSell, p.rent_price AS rentPrice, p.sell_price AS sellPrice, p.sell_price_arv AS sellPriceArv, p.optional_buy AS optionalBuy, p.rerent, p.joint_venture AS jointVenture, p.optional_finance AS optionalFinance, p.finance_init_payment AS financeInitPayment, p.finance_years AS financeYears, p.finance_interest AS financeInterest, p.month_payment AS monthPayment, p.property_type AS propertyType, p.property_condition AS propertyCondition, p.property_size AS propertySize, p.property_size_terrain AS propertySizeTerrain, p.energy_certificate AS energyCertificate, p.elevator, p.furnished, p.parking, p.pool, p.rooms, p.baths, BIN_TO_UUID(p.user_id) AS userId, u.first_name AS firstName, u.phone, u.email, p.created_at AS createdAt, p.updated_at AS updatedAt FROM properties p JOIN users u ON p.user_id = u.id WHERE p.id = UUID_TO_BIN(?);',
        [id],
      );
      return { result, fileNames };
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}
