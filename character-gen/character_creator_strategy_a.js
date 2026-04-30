// Character Creator Workflow — Strategy A    
// Last saved: 4/29/2026, 8:59:01 PM

export const workflowBlocks = [
  {
    "id": "start-server",
    "type": "script",
    "title": "Start API Server",
    "description": "Start HF AI Video Studio server if not already running",
    "command": "python scripts/character/server_manager.py --action start",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "links": [
      {
        "label": "Open Script",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/scripts/character/server_manager.py"
      },
      {
        "label": "Server Log",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/logs/server.log"
      },
      {
        "label": "run_config.json",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/config/run_config.json"
      }
    ],
    "position": {
      "x": -41.33964207940429,
      "y": 224.28233460031913
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "lastPid": 29484,
    "rawOutput": "Launching server (pid 16532) — polling health...\r\nSERVER_READY\r\n",
    "actualRetryAttempts": 1,
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "server-ready",
    "type": "condition",
    "title": "Server Ready?",
    "description": "Route based on server startup result",
    "logicType": "output-contains",
    "searchString": "SERVER_READY",
    "position": {
      "x": 450,
      "y": 300
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "server-abort",
    "type": "notepad",
    "title": "SERVER FAILED â€” Action Required",
    "notes": "The API server could not start.\n\nFix: Edit config/run_config.json\nSet 'server_dir' to the folder containing server.js\n\nTypical path:\n  <install-dir>/resources/server\n\nThen re-run the workflow.",
    "noteColor": "pink",
    "noteLayer": "normal",
    "width": 340,
    "height": 200,
    "position": {
      "x": 307.9661406025825,
      "y": 796.5922525107603
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "entry-selector",
    "type": "script",
    "title": "Load Character Concept",
    "description": "Read concept from test_concept.txt — swap path or file to change character",
    "command": "python scripts/character/normalize_input.py --mode file --path data/incoming/characters/test_concept.txt",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "links": [
      {
        "label": "Open Script",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/scripts/character/normalize_input.py"
      },
      {
        "label": "Text Drop Folder",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/data/incoming/characters"
      },
      {
        "label": "Image Drop Folder",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/data/incoming/character-refs"
      }
    ],
    "position": {
      "x": 800,
      "y": 300
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "lastPid": 32316,
    "rawOutput": "SESSION_PATH:C:\\Users\\Sam G\\Documents\\NORA\\automation\\data\\sessions\\6addcdc5-bea7-4f4c-90bc-6fdd116195de\r\n",
    "actualRetryAttempts": 1,
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "build-bible",
    "type": "customScriptAgent",
    "title": "Build Character Bible",
    "description": "AI agent: concept â†’ structured character_bible.json",
    "scriptPath": "C:/Users/Sam G/Documents/NORA/automation/agents/character_bible_builder.py",
    "scriptType": "python",
    "routeLabels": "bible_complete",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "memoryFolderPath": "C:/Users/Sam G/Documents/NORA/automation/data/sessions",
    "filePattern": "*.json",
    "maxMemoryFiles": 2,
    "sortBy": "modified",
    "maxRuntime": 5,
    "position": {
      "x": 1150,
      "y": 300
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "_executionLog": [],
    "_currentIteration": 0,
    "_totalCost": 0,
    "_localStatus": "idle",
    "_finalSummary": ""
  },
  {
    "id": "gen-prompts",
    "type": "script",
    "title": "Generate Image Prompts",
    "description": "Bible + shot list â†’ 11 optimized prompts",
    "command": "python scripts/character/generate_image_prompts.py",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "links": [
      {
        "label": "Open Script",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/scripts/character/generate_image_prompts.py"
      },
      {
        "label": "shot_list.json",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/config/shot_list.json"
      }
    ],
    "position": {
      "x": 1500,
      "y": 300
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "lastPid": 4592,
    "rawOutput": "PROMPTS_READY:6addcdc5-bea7-4f4c-90bc-6fdd116195de\r\n",
    "actualRetryAttempts": 1,
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "submit-reference",
    "type": "script",
    "title": "Submit Reference Shot",
    "description": "Submit front_full to image API â€” this becomes the anchor",
    "command": "python scripts/character/submit_reference_job.py",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "links": [
      {
        "label": "Open Script",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/scripts/character/submit_reference_job.py"
      }
    ],
    "position": {
      "x": 1850,
      "y": 300
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "lastPid": 25936,
    "rawOutput": "REFERENCE_SUBMITTED:c9a363f3-ac94-41ed-a02e-092ebb2da09d\r\n",
    "actualRetryAttempts": 1,
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "wait-ref",
    "type": "wait",
    "title": "Wait 20s",
    "description": "Give API time to start processing",
    "duration": 20,
    "unit": "seconds",
    "position": {
      "x": 2200,
      "y": 300
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "poll-reference",
    "type": "script",
    "title": "Poll Reference Job",
    "description": "Check if front_full is done",
    "command": "python scripts/character/poll_jobs.py --mode single --shot front_full",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "links": [
      {
        "label": "Open Script",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/scripts/character/poll_jobs.py"
      }
    ],
    "position": {
      "x": 2550,
      "y": 300
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "lastPid": 25512,
    "rawOutput": "REFERENCE_READY\r\n",
    "actualRetryAttempts": 1,
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "ref-ready",
    "type": "condition",
    "title": "Reference Image Ready?",
    "description": "Wait for front_full to succeed",
    "logicType": "output-contains",
    "searchString": "REFERENCE_READY",
    "position": {
      "x": 2900,
      "y": 300
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "ref-failed",
    "type": "condition",
    "title": "Reference Failed?",
    "description": "If failed, re-submit; if still pending, keep polling",
    "logicType": "output-contains",
    "searchString": "REFERENCE_FAILED",
    "position": {
      "x": 3250,
      "y": 500
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "ref-complete-failed",
    "type": "condition",
    "title": "Reference Unrecoverable?",
    "description": "Exit if reference retries are exhausted",
    "logicType": "output-contains",
    "searchString": "REFERENCE_COMPLETE_FAILED",
    "position": {
      "x": 3250,
      "y": 700
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "wait-ref-retry",
    "type": "wait",
    "title": "Wait 30s (Retry)",
    "description": "Polling backoff",
    "duration": 30,
    "unit": "seconds",
    "position": {
      "x": 2900,
      "y": 500
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "submit-batch",
    "type": "script",
    "title": "Submit Batch With Reference",
    "description": "Submit 10 remaining shots using front_full as referenceImageUrl",
    "command": "python scripts/character/submit_batch_with_ref.py",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "links": [
      {
        "label": "Open Script",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/scripts/character/submit_batch_with_ref.py"
      }
    ],
    "position": {
      "x": 3250,
      "y": 300
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "lastPid": 27992,
    "rawOutput": "BATCH_SUBMITTED:10\r\n",
    "actualRetryAttempts": 1,
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "wait-batch",
    "type": "wait",
    "title": "Wait 30s",
    "description": "Give API time to queue all jobs",
    "duration": 30,
    "unit": "seconds",
    "position": {
      "x": 3600,
      "y": 300
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "poll-batch",
    "type": "script",
    "title": "Poll Batch Jobs",
    "description": "Check all 10 jobs for completion",
    "command": "python scripts/character/poll_jobs.py --mode batch",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "links": [
      {
        "label": "Open Script",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/scripts/character/poll_jobs.py"
      }
    ],
    "position": {
      "x": 3950,
      "y": 300
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "lastPid": 28656,
    "rawOutput": "BATCH_COMPLETE\r\n",
    "actualRetryAttempts": 1,
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "batch-done",
    "type": "condition",
    "title": "All Batch Jobs Done?",
    "description": "Wait for all 10 batch shots to complete",
    "logicType": "output-contains",
    "searchString": "BATCH_COMPLETE",
    "position": {
      "x": 4300,
      "y": 300
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "batch-failed",
    "type": "condition",
    "title": "Batch Unrecoverable?",
    "description": "Stop retry loop when batch has unrecoverable failures",
    "logicType": "output-contains",
    "searchString": "BATCH_COMPLETE_FAILED",
    "position": {
      "x": 4300,
      "y": 700
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "wait-batch-retry",
    "type": "wait",
    "title": "Wait 30s (Retry)",
    "description": "Polling backoff for batch",
    "duration": 30,
    "unit": "seconds",
    "position": {
      "x": 4300,
      "y": 500
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "organize-output",
    "type": "script",
    "title": "Organize Output",
    "description": "Download images, upload to S3, write output_manifest.json",
    "command": "python scripts/character/organize_output.py",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "links": [
      {
        "label": "Open Script",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/scripts/character/organize_output.py"
      },
      {
        "label": "Output Folder",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/output/characters"
      }
    ],
    "position": {
      "x": 4650,
      "y": 300
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "lastPid": 33560,
    "rawOutput": "OUTPUT_ORGANIZED:C:\\Users\\Sam G\\Documents\\NORA\\automation\\output\\characters\\6addcdc5-bea7-4f4c-90bc-6fdd116195de\r\n",
    "actualRetryAttempts": 1,
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "gen-video-brief",
    "type": "script",
    "title": "Generate Video Brief",
    "description": "Build video_brief.json for downstream video generation",
    "command": "python scripts/character/generate_video_brief.py",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "links": [
      {
        "label": "Open Script",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/scripts/character/generate_video_brief.py"
      }
    ],
    "position": {
      "x": 5000,
      "y": 300
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "lastPid": 25964,
    "rawOutput": "VIDEO_BRIEF_READY:C:\\Users\\Sam G\\Documents\\NORA\\automation\\output\\characters\\6addcdc5-bea7-4f4c-90bc-6fdd116195de\r\n",
    "actualRetryAttempts": 1,
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "stop-server",
    "type": "script",
    "title": "Stop API Server",
    "description": "Stop server only if this workflow started it",
    "command": "python scripts/character/server_manager.py --action stop",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "links": [
      {
        "label": "Open Script",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/scripts/character/server_manager.py"
      }
    ],
    "position": {
      "x": 5350,
      "y": 300
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "lastPid": 15836,
    "rawOutput": "SERVER_STOPPED\r\n",
    "actualRetryAttempts": 1,
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "preview",
    "type": "media-viewer",
    "title": "Character Output",
    "description": "Preview generated character images",
    "mediaUrl": "C:\\Users\\Sam G\\Documents\\NORA\\automation\\output\\characters\\latest\\images",
    "mediaType": "image",
    "fileFilter": "*.*",
    "autoSelectLatest": true,
    "autoRefreshInterval": 0,
    "showInline": true,
    "position": {
      "x": 5840.612424930273,
      "y": 300
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "notes": "",
    "command": "",
    "workingDir": "./",
    "interactive": false,
    "autoplay": false,
    "controls": true,
    "links": [],
    "logicType": "status",
    "startTime": "09:00",
    "endTime": "17:00",
    "selectedDays": [
      1,
      2,
      3,
      4,
      5
    ],
    "searchString": "",
    "caseSensitive": false,
    "regexPattern": "",
    "regexFlags": "i",
    "threshold": 0,
    "operator": ">=",
    "rangeMin": 0,
    "rangeMax": 100,
    "expression": "",
    "variables": {},
    "edgeDefaults": [],
    "aiProvider": "gemini",
    "aiModel": "gemini-2.0-flash",
    "aiModelCustom": "",
    "aiApiKey": "",
    "aiCsvEnabled": false,
    "aiCsvDir": "",
    "memoryFolderPath": "",
    "tools": [],
    "inputFolderPath": "",
    "filePattern": "*.txt;*.html",
    "sortBy": "modified",
    "categories": [
      "summarize",
      "todo",
      "schedule",
      "email",
      "other"
    ],
    "customPrompt": "",
    "conversationMode": "single-turn",
    "maxTurns": 5,
    "duration": 5,
    "unit": "seconds",
    "retryEnabled": false,
    "retryAttempts": 3,
    "retryDelayMs": 1000,
    "retryBackoff": "exponential",
    "goalPrompt": "",
    "userRequest": "",
    "defaultWorkingDir": "",
    "maxIterations": 10,
    "timeoutMinutes": 30,
    "budgetLimit": 10,
    "maxTokens": 128000,
    "toolsJson": "[]",
    "agentDirectory": "",
    "scriptPath": "",
    "scriptType": "auto-detect",
    "routeLabels": "",
    "maxRuntime": 30,
    "debugMode": false,
    "allowToolDiscovery": false,
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  },
  {
    "id": "notes",
    "type": "notepad",
    "title": "COMIC CHARACTER CREATOR â€” Strategy A (Reference Anchor)",
    "notes": "SETUP:\n1. Edit config/run_config.json â€” set art_style, image_model, s3_upload\n2. Set server_dir in run_config.json to folder containing server.js\n3. Add ANTHROPIC_API_KEY (or OPENAI_API_KEY) to agents/.env\n\nRUNNING:\n- Workflow starts server automatically\n- Interactive mode: type character description when prompted\n- File mode: drop .txt in data/incoming/characters/ and run normalize_input.py with --mode file --path <path>\n- Image mode: drop image in data/incoming/character-refs/ and run with --mode image --path <path>\n\nOUTPUT:\noutput/characters/{character_id}/\n  images/         â† 11 named PNG files\n  character_bible.json\n  prediction_log.json\n  output_manifest.json\n  video_brief.json\n\nSTRATEGY A: front_full generated first, used as referenceImageUrl for all 10 remaining shots.\nHighest consistency. Adds ~2-3 min for the reference shot to complete first.\n\nSWITCH TO STRATEGY B: Use character_creator_strategy_b.js for parallel batch + AI review.",
    "noteColor": "blue",
    "noteLayer": "background",
    "width": 420,
    "height": 380,
    "position": {
      "x": -232.6582496413199,
      "y": 685.967862266858
    },
    "isExecuted": false,
    "status": "idle",
    "output": "",
    "_executionLog": [],
    "_localStatus": "idle",
    "_currentIteration": 0,
    "_totalCost": 0,
    "_finalSummary": ""
  }
];

export const workflowConnections = [
  {
    "id": "e-start-server-ready",
    "source": "start-server",
    "target": "server-ready",
    "type": "smoothstep"
  },
  {
    "id": "e-server-ok",
    "source": "server-ready",
    "target": "entry-selector",
    "type": "smoothstep",
    "label": "contains"
  },
  {
    "id": "e-server-fail",
    "source": "server-ready",
    "target": "stop-server",
    "type": "smoothstep",
    "label": "not-contains"
  },
  {
    "id": "e-entry-bible",
    "source": "entry-selector",
    "target": "build-bible",
    "type": "smoothstep"
  },
  {
    "id": "e-bible-prompts",
    "source": "build-bible",
    "target": "gen-prompts",
    "sourceHandle": "route_bible_complete",
    "type": "smoothstep"
  },
  {
    "id": "e-bible-error",
    "source": "build-bible",
    "target": "stop-server",
    "sourceHandle": "error",
    "type": "smoothstep"
  },
  {
    "id": "e-prompts-submit",
    "source": "gen-prompts",
    "target": "submit-reference",
    "type": "smoothstep"
  },
  {
    "id": "e-submit-wait",
    "source": "submit-reference",
    "target": "wait-ref",
    "type": "smoothstep"
  },
  {
    "id": "e-wait-poll",
    "source": "wait-ref",
    "target": "poll-reference",
    "type": "smoothstep"
  },
  {
    "id": "e-poll-ref-cond",
    "source": "poll-reference",
    "target": "ref-ready",
    "type": "smoothstep"
  },
  {
    "id": "e-ref-ok",
    "source": "ref-ready",
    "target": "submit-batch",
    "type": "smoothstep",
    "label": "contains"
  },
  {
    "id": "e-ref-notready-check",
    "source": "ref-ready",
    "target": "ref-complete-failed",
    "type": "smoothstep",
    "label": "not-contains"
  },
  {
    "id": "e-ref-complete-failed-stop",
    "source": "ref-complete-failed",
    "target": "stop-server",
    "type": "smoothstep",
    "label": "contains"
  },
  {
    "id": "e-ref-notterminal-check",
    "source": "ref-complete-failed",
    "target": "ref-failed",
    "type": "smoothstep",
    "label": "not-contains"
  },
  {
    "id": "e-ref-failed-resubmit",
    "source": "ref-failed",
    "target": "submit-reference",
    "type": "smoothstep",
    "label": "contains"
  },
  {
    "id": "e-ref-pending-wait",
    "source": "ref-failed",
    "target": "wait-ref-retry",
    "type": "smoothstep",
    "label": "not-contains"
  },
  {
    "id": "e-ref-retry-loop",
    "source": "wait-ref-retry",
    "target": "poll-reference",
    "type": "smoothstep",
    "label": "loop:20"
  },
  {
    "id": "e-batch-wait",
    "source": "submit-batch",
    "target": "wait-batch",
    "type": "smoothstep"
  },
  {
    "id": "e-wait-batch-poll",
    "source": "wait-batch",
    "target": "poll-batch",
    "type": "smoothstep"
  },
  {
    "id": "e-poll-batch-cond",
    "source": "poll-batch",
    "target": "batch-done",
    "type": "smoothstep"
  },
  {
    "id": "e-batch-ok",
    "source": "batch-done",
    "target": "organize-output",
    "type": "smoothstep",
    "label": "contains"
  },
  {
    "id": "e-batch-wait-retry",
    "source": "batch-done",
    "target": "batch-failed",
    "type": "smoothstep",
    "label": "not-contains"
  },
  {
    "id": "e-batch-failed-stop",
    "source": "batch-failed",
    "target": "stop-server",
    "type": "smoothstep",
    "label": "contains"
  },
  {
    "id": "e-batch-notfailed-retry",
    "source": "batch-failed",
    "target": "wait-batch-retry",
    "type": "smoothstep",
    "label": "not-contains"
  },
  {
    "id": "e-batch-retry-loop",
    "source": "wait-batch-retry",
    "target": "poll-batch",
    "type": "smoothstep",
    "label": "loop:30"
  },
  {
    "id": "e-organize-brief",
    "source": "organize-output",
    "target": "gen-video-brief",
    "type": "smoothstep"
  },
  {
    "id": "e-brief-stop",
    "source": "gen-video-brief",
    "target": "stop-server",
    "type": "smoothstep"
  },
  {
    "id": "e-stop-preview",
    "source": "stop-server",
    "target": "preview",
    "type": "smoothstep"
  }
];
