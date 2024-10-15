import connection from '#Config/db.js';
import { createQuery, updateQuery } from '#Utils/utils.js';

export default class PropertiesModel {
  static getPropertyId = async ({ id }) => {
    try {
      const [result] = await connection.query(
        'SELECT BIN_TO_UUID(id) AS id, visible, title, description, conditions_specials AS conditionsSpecials, address, postal, city, country, region, property_hide_address AS propertyHideAddress, rent_sell AS rentSell, rent_price AS rentPrice, sell_price AS sellPrice, sell_price_arv AS sellPriceArv, optional_buy AS optionalBuy, rerent, joint_venture AS jointVenture, optional_finance AS optionalFinance, finance_init_payment AS financeInitPayment, finance_years AS financeYears, finance_interest AS financeInterest, month_payment AS monthPayment, property_type AS propertyType, property_condition AS propertyCondition, property_size AS propertySize, property_size_terrain AS propertySizeTerrain, energy_certificate AS energyCertificate, elevator, furnished, parking, pool, rooms, baths, created_at AS createdAt, updated_at AS updatedAt FROM properties WHERE id = UUID_TO_BIN(?);',
        [id],
      );
      return result;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  static getUserProperties = async ({ userId }) => {
    try {
      const [result] = await connection.query(
        'SELECT BIN_TO_UUID(id) AS id, visible, title, description, conditions_specials AS conditionsSpecials, address, postal, city, country, region, property_hide_address AS propertyHideAddress, rent_sell AS rentSell, rent_price AS rentPrice, sell_price AS sellPrice, sell_price_arv AS sellPriceArv, optional_buy AS optionalBuy, rerent, joint_venture AS jointVenture, optional_finance AS optionalFinance, finance_init_payment AS financeInitPayment, finance_years AS financeYears, finance_interest AS financeInterest, month_payment AS monthPayment, property_type AS propertyType, property_condition AS propertyCondition, property_size AS propertySize, property_size_terrain AS propertySizeTerrain, energy_certificate AS energyCertificate, elevator, furnished, parking, pool, rooms, baths, created_at AS createdAt, updated_at AS updatedAt FROM properties WHERE user_id = UUID_TO_BIN(?) ORDER BY created_at DESC;',
        [userId],
      );
      return result;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  static createProperty = async ({ input }) => {
    const { querySQL, queryInputs } = await createQuery({
      input,
    });

    try {
      await connection.query(querySQL, queryInputs);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  static updateProperty = async ({ input }) => {
    const { queryInputs, querySQL } = await updateQuery({ input });

    try {
      const [result] = await connection.query(querySQL, queryInputs);
      if (result.affectedRows === 0) return false;
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  static removeProperty = async ({ id, userId }) => {
    try {
      const [fileNames] = await connection.query(
        'SELECT img_url AS imgUrl FROM properties_images WHERE property_id = UUID_TO_BIN(?);',
        [id],
      );

      await connection.query(
        'DELETE FROM properties_images WHERE property_id = UUID_TO_BIN(?);',
        [id],
      );

      const [result] = await connection.query(
        'DELETE FROM properties WHERE id = UUID_TO_BIN(?) AND user_id = UUID_TO_BIN(?);',
        [id, userId],
      );
      if (result.affectedRows === 0) return { removed: false };
      else return { removed: true, images: fileNames };
    } catch (error) {
      console.error(error);
      return { removed: false };
    }
  };
}
