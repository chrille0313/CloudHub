/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1868868837")

  // remove field
  collection.fields.removeById("relation2179960827")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1868868837",
    "hidden": false,
    "id": "relation836766480",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "sub_folderss",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1868868837")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1953261767",
    "hidden": false,
    "id": "relation2179960827",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "sub_folders",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("relation836766480")

  return app.save(collection)
})
