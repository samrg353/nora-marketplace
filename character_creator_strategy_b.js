// Character Creator Workflow — Strategy B (Parallel Batch with AI Consistency Review)
// Last saved: 4/29/2026, 12:52:00 PM

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
      "x": 100,
      "y": 300
    },
    "isExecuted": false
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
    "isExecuted": false
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
    "isExecuted": false
  },
  {
    "id": "build-bible",
    "type": "customScriptAgent",
    "title": "Build Character Bible",
    "description": "AI agent: concept to structured character_bible.json",
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
    "isExecuted": false
  },
  {
    "id": "gen-prompts",
    "type": "script",
    "title": "Generate Image Prompts",
    "description": "Bible plus shot list to 11 optimized prompts",
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
    "isExecuted": false
  },
  {
    "id": "submit-all",
    "type": "script",
    "title": "Submit All 11 Jobs in Parallel",
    "description": "Submit all shots simultaneously, no reference image",
    "command": "python scripts/character/submit_batch_parallel.py",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "links": [
      {
        "label": "Open Script",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/scripts/character/submit_batch_parallel.py"
      }
    ],
    "position": {
      "x": 1850,
      "y": 300
    },
    "isExecuted": false
  },
  {
    "id": "wait-batch",
    "type": "wait",
    "title": "Wait 30s",
    "description": "Give API time to queue all jobs",
    "duration": 30,
    "unit": "seconds",
    "position": {
      "x": 2200,
      "y": 300
    },
    "isExecuted": false
  },
  {
    "id": "poll-batch",
    "type": "script",
    "title": "Poll All Jobs",
    "description": "Check all 11 jobs for completion",
    "command": "python scripts/character/poll_jobs.py --mode batch",
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
    "isExecuted": false
  },
  {
    "id": "batch-done",
    "type": "condition",
    "title": "All Jobs Done?",
    "description": "Wait for all 11 shots to complete",
    "logicType": "output-contains",
    "searchString": "BATCH_COMPLETE",
    "position": {
      "x": 2900,
      "y": 300
    },
    "isExecuted": false
  },
  {
    "id": "batch-failed",
    "type": "condition",
    "title": "Batch Unrecoverable?",
    "description": "Stop retry loop when poller reports unrecoverable failures",
    "logicType": "output-contains",
    "searchString": "BATCH_COMPLETE_FAILED",
    "position": {
      "x": 2900,
      "y": 700
    },
    "isExecuted": false
  },
  {
    "id": "wait-batch-retry",
    "type": "wait",
    "title": "Wait 30s (Retry)",
    "description": "Polling backoff",
    "duration": 30,
    "unit": "seconds",
    "position": {
      "x": 2900,
      "y": 500
    },
    "isExecuted": false
  },
  {
    "id": "review-consistency",
    "type": "customScriptAgent",
    "title": "Review Consistency",
    "description": "AI vision model checks all images against character bible anchors",
    "scriptPath": "C:/Users/Sam G/Documents/NORA/automation/agents/consistency_reviewer.py",
    "scriptType": "python",
    "routeLabels": "consistent, inconsistent",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "memoryFolderPath": "C:/Users/Sam G/Documents/NORA/automation/data/sessions",
    "filePattern": "*.json",
    "maxMemoryFiles": 5,
    "sortBy": "modified",
    "maxRuntime": 10,
    "position": {
      "x": 3250,
      "y": 300
    },
    "isExecuted": false
  },
  {
    "id": "consistency-ok",
    "type": "condition",
    "title": "Consistency OK?",
    "description": "Route based on AI review result",
    "logicType": "output-contains",
    "searchString": "CONSISTENT",
    "position": {
      "x": 3600,
      "y": 300
    },
    "isExecuted": false
  },
  {
    "id": "retry-inconsistent",
    "type": "script",
    "title": "Retry Failed Shots (Anchored)",
    "description": "Re-submit only failed consistency shots using front_full as reference anchor",
    "command": "python scripts/character/retry_inconsistent_shots.py",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "links": [
      {
        "label": "Open Script",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/scripts/character/retry_inconsistent_shots.py"
      }
    ],
    "position": {
      "x": 3950,
      "y": 480
    },
    "isExecuted": false
  },
  {
    "id": "retry-exhausted",
    "type": "condition",
    "title": "Consistency Retry Exhausted?",
    "description": "Stop correction loop when retry script reports exhaustion",
    "logicType": "output-contains",
    "searchString": "CONSISTENCY_RETRY_EXHAUSTED",
    "position": {
      "x": 4300,
      "y": 480
    },
    "isExecuted": false
  },
  {
    "id": "log-inconsistencies",
    "type": "script",
    "title": "Log Inconsistencies",
    "description": "Write inconsistency report after retry budget is exhausted",
    "command": "python scripts/character/log_inconsistencies.py",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "links": [
      {
        "label": "Sessions Folder",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/data/sessions"
      }
    ],
    "position": {
      "x": 4650,
      "y": 480
    },
    "isExecuted": false
  },
  {
    "id": "organize-output-pass",
    "type": "script",
    "title": "Organize Output (Passed)",
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
      "x": 3950,
      "y": 300
    },
    "isExecuted": false
  },
  {
    "id": "organize-output-fail",
    "type": "script",
    "title": "Organize Output (Review Failed)",
    "description": "Download images anyway. consistency_report.json flags the issues.",
    "command": "python scripts/character/organize_output.py",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "links": [
      {
        "label": "Open Script",
        "url": "file:///C:/Users/Sam G/Documents/NORA/automation/scripts/character/organize_output.py"
      }
    ],
    "position": {
      "x": 5000,
      "y": 480
    },
    "isExecuted": false
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
      "x": 4650,
      "y": 300
    },
    "isExecuted": false
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
      "x": 5000,
      "y": 300
    },
    "isExecuted": false
  },
  {
    "id": "preview",
    "type": "media-viewer",
    "title": "Character Output",
    "description": "Preview generated character images",
    "mediaUrl": "C:\\Users\\Sam G\\Documents\\NORA\\automation\\output\\characters\\latest\\images",
    "mediaType": "image",
    "fileFilter": "*.*",
    "autoSelectLatest": false,
    "autoRefreshInterval": 0,
    "showInline": true,
    "position": {
      "x": 5522.8886693292725,
      "y": 312.6196108999469
    },
    "isExecuted": false,
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
    "allowToolDiscovery": false
  },
  {
    "id": "notes",
    "type": "notepad",
    "title": "COMIC CHARACTER CREATOR — Strategy B (Parallel Batch)",
    "notes": "SETUP:\n1. Edit config/run_config.json — set art_style, image_model, s3_upload\n2. Set server_dir in run_config.json to folder containing server.js\n3. Add ANTHROPIC_API_KEY (or OPENAI_API_KEY) to agents/.env\n4. Optional: set max_consistency_retries in run_config.json (default: 2)\n\nSTRATEGY B: All 11 shots submitted simultaneously. Faster than A.\nAI reviewer checks images for consistency after generation.\nIf INCONSISTENT: workflow auto-retries only failed shots using\nfront_full as reference anchor, bounded by max_consistency_retries.\n\nOUTPUT:\noutput/characters/{character_id}/\n  images/ — 11 named PNG files\n  character_bible.json\n  prediction_log.json\n  consistency_report.json\n  output_manifest.json\n  video_brief.json\n\nSWITCH TO STRATEGY A: Use character_creator_strategy_a.js for\nhighest consistency via reference anchor.",
    "noteColor": "green",
    "noteLayer": "background",
    "width": 420,
    "height": 400,
    "position": {
      "x": 100,
      "y": 600
    },
    "isExecuted": false
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
    "target": "submit-all",
    "type": "smoothstep"
  },
  {
    "id": "e-submit-wait",
    "source": "submit-all",
    "target": "wait-batch",
    "type": "smoothstep"
  },
  {
    "id": "e-wait-poll",
    "source": "wait-batch",
    "target": "poll-batch",
    "type": "smoothstep"
  },
  {
    "id": "e-poll-cond",
    "source": "poll-batch",
    "target": "batch-done",
    "type": "smoothstep"
  },
  {
    "id": "e-batch-ok",
    "source": "batch-done",
    "target": "review-consistency",
    "type": "smoothstep",
    "label": "contains"
  },
  {
    "id": "e-batch-retry-wait",
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
    "id": "e-review-cond",
    "source": "review-consistency",
    "target": "consistency-ok",
    "sourceHandle": "route_consistent",
    "type": "smoothstep"
  },
  {
    "id": "e-review-incon",
    "source": "review-consistency",
    "target": "retry-inconsistent",
    "sourceHandle": "route_inconsistent",
    "type": "smoothstep"
  },
  {
    "id": "e-retry-cond",
    "source": "retry-inconsistent",
    "target": "retry-exhausted",
    "type": "smoothstep"
  },
  {
    "id": "e-retry-exhausted-log",
    "source": "retry-exhausted",
    "target": "log-inconsistencies",
    "type": "smoothstep",
    "label": "contains"
  },
  {
    "id": "e-retry-continue-poll",
    "source": "retry-exhausted",
    "target": "wait-batch-retry",
    "type": "smoothstep",
    "label": "not-contains"
  },
  {
    "id": "e-review-error",
    "source": "review-consistency",
    "target": "stop-server",
    "sourceHandle": "error",
    "type": "smoothstep"
  },
  {
    "id": "e-consistent-org",
    "source": "consistency-ok",
    "target": "organize-output-pass",
    "type": "smoothstep",
    "label": "contains"
  },
  {
    "id": "e-inconsistent-org",
    "source": "consistency-ok",
    "target": "organize-output-fail",
    "type": "smoothstep",
    "label": "not-contains"
  },
  {
    "id": "e-log-org-fail",
    "source": "log-inconsistencies",
    "target": "organize-output-fail",
    "type": "smoothstep"
  },
  {
    "id": "e-org-pass-brief",
    "source": "organize-output-pass",
    "target": "gen-video-brief",
    "type": "smoothstep"
  },
  {
    "id": "e-org-fail-brief",
    "source": "organize-output-fail",
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
