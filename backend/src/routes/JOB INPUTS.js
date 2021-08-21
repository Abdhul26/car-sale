

const express = require('express');

const JOB INPUTSService = require('../services/JOB INPUTS');
const JOB INPUTSDBApi = require('../db/api/JOB INPUTS');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

/**
 *  @swagger
 *  components:
 *    schemas:
 *      JOB INPUTS:
 *        type: object
 *        properties:
 
 *          Hoistway Width (mm):
 *            type: string
 *            default: Hoistway Width (mm)
 *          Hoistway Depth (mm):
 *            type: string
 *            default: Hoistway Depth (mm)
 *          Glass Door:
 *            type: string
 *            default: Glass Door
 *          Opening Type:
 *            type: string
 *            default: Opening Type
 *          No of Stops:
 *            type: string
 *            default: No of Stops
 *          Minimum Travel  (mm) Based on Stops:
 *            type: string
 *            default: Minimum Travel  (mm) Based on Stops
 *          Maximum Travel (mm):
 *            type: string
 *            default: Maximum Travel (mm)
 *          Travel (mm):
 *            type: string
 *            default: Travel (mm)
 *          Minimum Overhead (mm):
 *            type: string
 *            default: Minimum Overhead (mm)
 *          Minimum Pit Depth (mm):
 *            type: string
 *            default: Minimum Pit Depth (mm)
 *          Overhead (mm):
 *            type: string
 *            default: Overhead (mm)
 *          Pit Depth (mm):
 *            type: string
 *            default: Pit Depth (mm)
 */

/**
 *  @swagger
 * tags:
 *   name: JOB INPUTS
 *   description: The JOB INPUTS managing API
 */

  /**
  *  @swagger
  *  /api/JOB INPUTS:
  *    post:
  *      security:
  *        - bearerAuth: []
  *      tags: [JOB INPUTS]
  *      summary: Add new item
  *      description: Add new item
  *      requestBody:
  *        required: true
  *        content:
  *          application/json:
  *            schema:
  *              properties:
  *                data:
  *                  description: Data of the updated item
  *                  type: object
  *                  $ref: "#/components/schemas/JOB INPUTS"
  *      responses:
  *        200:
  *          description: The item was successfully added
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/JOB INPUTS"
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        405:
  *          description: Invalid input data
  *        500:
  *          description: Some server error
  */

router.post('/', async (req, res) => {
    await JOB INPUTSService.create(req.body.data, req.currentUser, true, req.headers.referer);
    const payload = true;
    res.status(200).send(payload);
});

  /**
  *  @swagger
  *  /api/JOB INPUTS/{id}:
  *    put:
  *      security:
  *        - bearerAuth: []
  *      tags: [JOB INPUTS]
  *      summary: Update the data of the selected item
  *      description: Update the data of the selected item
  *      parameters:
  *        - in: path
  *          name: id
  *          description: Item ID to update
  *          required: true
  *          schema:
  *            type: string
  *      requestBody:
  *        description: Set new item data
  *        required: true
  *        content:
  *          application/json:
  *            schema:
  *              properties:
  *                id:
  *                  description: ID of the updated item
  *                  type: string
  *                data:
  *                  description: Data of the updated item
  *                  type: object
  *                  $ref: "#/components/schemas/JOB INPUTS"
  *              required:
  *                - id
  *      responses:
  *        200:
  *          description: The item data was successfully updated
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/JOB INPUTS"
  *        400:
  *          description: Invalid ID supplied
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        404:
  *          description: Item not found
  *        500:
  *          description: Some server error
  */

router.put('/:id', wrapAsync(async (req, res) => {
  await JOB INPUTSService.update(req.body.data, req.body.id, req.currentUser);
  const payload = true;
  res.status(200).send(payload);
}));

  /**
  * @swagger
  *  /api/JOB INPUTS/{id}:
  *    delete:
  *      security:
  *        - bearerAuth: []
  *      tags: [JOB INPUTS]
  *      summary: Delete the selected item
  *      description: Delete the selected item
  *      parameters:
  *        - in: path
  *          name: id
  *          description: Item ID to delete
  *          required: true
  *          schema:
  *            type: string
  *      responses:
  *        200:
  *          description: The item was successfully deleted
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/JOB INPUTS"
  *        400:
  *          description: Invalid ID supplied
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        404:
  *          description: Item not found
  *        500:
  *          description: Some server error
  */

router.delete('/:id', wrapAsync(async (req, res) => {
  await JOB INPUTSService.remove(req.params.id, req.currentUser);
  const payload = true;
  res.status(200).send(payload);
}));

  /**
  *  @swagger
  *  /api/JOB INPUTS:
  *    get:
  *      security:
  *        - bearerAuth: []
  *      tags: [JOB INPUTS]
  *      summary: Get all JOB INPUTS
  *      description: Get all JOB INPUTS
  *      responses:
  *        200:
  *          description: JOB INPUTS list successfully received
  *          content:
  *            application/json:
  *              schema:
  *                type: array
  *                items:
  *                  $ref: "#/components/schemas/JOB INPUTS"
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        404:
  *          description: Data not found
  *        500:
  *          description: Some server error
  */

router.get('/', wrapAsync(async (req, res) => {
  const payload = await JOB INPUTSDBApi.findAll(
    req.query,
  );

  res.status(200).send(payload);
}));

router.get('/autocomplete', async (req, res) => {
  const payload = await JOB INPUTSDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

  /**
  * @swagger
  *  /api/JOB INPUTS/{id}:
  *    get:
  *      security:
  *        - bearerAuth: []
  *      tags: [JOB INPUTS]
  *      summary: Get selected item
  *      description: Get selected item
  *      parameters:
  *        - in: path
  *          name: id
  *          description: ID of item to get
  *          required: true
  *          schema:
  *            type: string
  *      responses:
  *        200:
  *          description: Selected item successfully received
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/JOB INPUTS"
  *        400:
  *          description: Invalid ID supplied
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        404:
  *          description: Item not found
  *        500:
  *          description: Some server error
  */

router.get('/:id', wrapAsync(async (req, res) => {
  const payload = await JOB INPUTSDBApi.findBy(
    { id: req.params.id },
  );

  res.status(200).send(payload);
}));

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
