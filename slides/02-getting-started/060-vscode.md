## Integrate with vscode

![vscode](resources/vscode.png) <!-- .element class="smaller-logo" -->

Setup

1. Configure TypeScript SDK
1. Configure the compile task
1. Show problems
1. Run your application
1. Debug your application

---

### Configure TypeScript SDK

If your using a local TypeScript compiler

1. Open command palette with **Ctrl+Shift+P**
1. Select: "Preferences: Open Workspace Settings"
1. Configure the typescript sdk on the right side
```json
"typescript.tsdk": "./node_modules/typescript/lib"
```

---

### Configure the compile task

Configure your vscode to compile TypeScript.
1. Open the command palette with **Ctrl+Shift+P**
1. Type "Configure Task Runner", press Enter to select it.
1. Select "TypeScript - tsconfig.json", press Enter to select it.
    1. Inspect the generated ".vscode/tasks.json" file.
    1. If you're using local TypeScript, set the `"command"` to <br />`"${workspaceRoot}/node_modules/.bin/tsc"`
1. Remove the "HelloWorld.js" file.
1. Hit **Ctrl+Shift+B** (Run Build Task)
1. Confirm that the "HelloWorld.js" file is generated

---

### Show problems

Let's see how problems might look in vscode

1. Open "HelloWorld.ts"
1. Add an error to the file, save the file
1. Open the "Problems" using pane using **Ctrl+Shift+M**,
or by clicking on ![TypeScript problem status bar](/resources/typescript_problemstatusbar.png) <!-- .element class="img-in-text"-->
in the status bar
1. Confirm that the problem can be found and you can click on the link.

---

### Run your application

Run your application using vscode

1. Press **F5**
1. Select "Node.js" from the list at the top
1. Inspect the newly created ".vscode/launch.json" file
1. Alter the first object in the `"configurations"` array
    * Change `"program": "..."` to<br /> `"program": "${workspaceRoot}\\HelloWorld.js"`
1. Press **F5** again
1. Confirm that you see the text "Hello world" in the console below

---

### Debug your application

1. Alter the file ".vscode/launch.json".
    * Set `"sourceMaps"` to `true`
1. Alter the file "tsconfig.json"
    * Set `"sourceMap"` to `true`
1. Save both files and recompile (**Ctrl+Shift+B**)
1. Open "HelloWorld.ts". Set a breakpoint <br />
![breakpoint example](resources/typescript-breakpoint.png) <!-- .element class="pin-height-100" -->
1. Press **F5**. Confirm that it breaks on the breakpoint.
1. Try out the debugging tools
    * Watch variables, step over, step into, etc

---

### Congratulations!

You now configured vscode to use TypeScript

<i class="fa fa-birthday-cake icon-big" aria-hidden="true"></i>

* Compile with **Ctrl+Shift+B**
* Show problems with **Ctrl+Shift+M**
* Run with **Ctrl+F5**
* Debug with **F5**

