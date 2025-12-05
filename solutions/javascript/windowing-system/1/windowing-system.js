// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600); 
    this.size = new Size(); 
    this.position = new Position()    
  }

resize(newSize) {
  if (newSize.width < this.screenSize.width && newSize.height < this.screenSize.height) {
    this.size.resize(newSize.width, newSize.height);
  } else {
    if (newSize.width > this.screenSize.width) {
      this.size.width = this.screenSize.width - this.position.x;}
    if (newSize.height > this.screenSize.height) {
      this.size.height = this.screenSize.height - this.position.y;}
  }
  if (this.size.width < 1) {
      this.size.width = 1}
  if (this.size.height < 1) {
      this.size.height = 1} 
    }
  //method to move window
  move(newPosition) {
    const newWidth = this.size.width + newPosition.x; 
    const newHeight = this.size.height + newPosition.y;
    if (newWidth < this.screenSize.width && newHeight < this.screenSize.height) {
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
    }else {
        if (newWidth > this.screenSize.width) {
            this.position.x = newPosition.x - ((newWidth) - this.screenSize.width)
        }
        if (newHeight > this.screenSize.height) {
            this.position.y = newPosition.y - ((newHeight) - this.screenSize.height)
        }            
    }
    if (this.position.x < 0) {
        this.position.x = 0;
    }
    if (this.position.y < 0) {
        this.position.y = 0;
    }  
  }
}
// constructor function to change window size and position
export function changeWindow(programWindow) {
  const newSize = new Size(400, 300)
  const newPosition = new Position(100,150)
  
  programWindow.resize(newSize)
  programWindow.move(newPosition)
  
  return programWindow
}