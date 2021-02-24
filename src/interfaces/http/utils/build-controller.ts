import path from 'path';

const buildController = (controller: string): any => {
  // Build the path first of the controller
  const controllersPath = path.resolve(__dirname, '..', 'controllers');

  const controllerPath = path.resolve(
    controllersPath,
    path.extname(controller) === '.ts' ? controller : `${controller}.ts`
  );

  try {
    // Require/load it up
    const { default: ControllerInstance } = require(`${controllerPath}`);

    // Instantiate it
    const Controller = new ControllerInstance();

    // Return the controller
    return Controller;
  } catch (error) {
    console.error(error);
  }
};

export default buildController;
