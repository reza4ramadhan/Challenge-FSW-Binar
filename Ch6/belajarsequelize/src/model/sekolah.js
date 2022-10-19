module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'sekolah',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize.literal('uuid_generate_v4()'),
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      alamat: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'sekolah',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'sekolah_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    },
  )
}
