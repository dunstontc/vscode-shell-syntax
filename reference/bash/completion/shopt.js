// https://www.gnu.org/software/bash/manual/bash.html#The-Shopt-Builtin

module.exports = [

  {
    "option": "autocd",
    "definition": "If set, a command name that is the name of a directory is executed as if it were the argument to the cd command. This option is only used by interactive shells.",
  },

  {
    "option": "cdable_vars",
    "definition": "If this is set, an argument to the cd builtin command that is not a directory is assumed to be the name of a variable whose value is the directory to change to.",
  },

  {
    "option": "cdspell",
    "definition": "If set, minor errors in the spelling of a directory component in a cd command will be corrected. The errors checked for are transposed characters, a missing character, and a character too many. If a correction is found, the corrected path is printed, and the command proceeds. This option is only used by interactive shells.",
  },

  {
    "option": "checkhash",
    "definition": "If this is set, Bash checks that a command found in the hash table exists before trying to execute it. If a hashed command no longer exists, a normal path search is performed.",
  },

  {
    "option": "checkjobs",
    "definition": "If set, Bash lists the status of any stopped and running jobs before exiting an interactive shell. If any jobs are running, this causes the exit to be deferred until a second exit is attempted without an intervening command (see Job Control). The shell always postpones exiting if any jobs are stopped.",
  },

  {
    "option": "checkwinsize",
    "definition": "If set, Bash checks the window size after each command and, if necessary, updates the values of LINES and COLUMNS.",
  },

  {
    "option": "cmdhist",
    "definition": "If set, Bash attempts to save all lines of a multiple-line command in the same history entry. This allows easy re-editing of multi-line commands.",
  },

  {
    "option": "compat31",
    "definition": "If set, Bash changes its behavior to that of version 3.1 with respect to quoted arguments to the conditional command's `=~` operator and with respect to locale-specific string comparison when using the [[ conditional command's `<` and `>` operators. Bash versions prior to bash-4.1 use ASCII collation and strcmp(3); bash-4.1 and later use the current locale's collation sequence and strcoll(3).",
  },

  {
    "option": "compat32",
    "definition": "If set, Bash changes its behavior to that of version 3.2 with respect to locale-specific string comparison when using the [[ conditional command's `<` and `>` operators (see previous item) and the effect of interrupting a command list. Bash versions 3.2 and earlier continue with the next command in the list after one terminates due to an interrupt.",
  },

  {
    "option": "compat40",
    "definition": "If set, Bash changes its behavior to that of version 4.0 with respect to locale-specific string comparison when using the [[ conditional command's `<` and `>` operators (see description of compat31) and the effect of interrupting a command list. Bash versions 4.0 and later interrupt the list as if the shell received the interrupt; previous versions continue with the next command in the list.",
  },

  {
    "option": "compat41",
    "definition": "If set, Bash, when in POSIX mode, treats a single quote in a double-quoted parameter expansion as a special character. The single quotes must match (an even number) and the characters between the single quotes are considered quoted. This is the behavior of POSIX mode through version 4.1. The default Bash behavior remains as in previous versions.",
  },

  {
    "option": "compat42",
    "definition": "If set, Bash does not process the replacement string in the pattern substitution word expansion using quote removal.",
  },

  {
    "option": "compat43",
    "definition": "If set, Bash does not print a warning message if an attempt is made to use a quoted compound array assignment as an argument to declare, makes word expansion errors non-fatal errors that cause the current command to fail (the default behavior is to make them fatal errors that cause the shell to exit), and does not reset the loop state when a shell function is executed (this allows break or continue in a shell function to affect loops in the caller's context).",
  },

  {
    "option": "complete_fullquote",
    "definition": "If set, Bash quotes all shell metacharacters in filenames and directory names when performing completion. If not set, Bash removes metacharacters such as the dollar sign from the set of characters that will be quoted in completed filenames when these metacharacters appear in shell variable references in words to be completed. This means that dollar signs in variable names that expand to directories will not be quoted; however, any dollar signs appearing in filenames will not be quoted, either. This is active only when bash is using backslashes to quote completed filenames. This variable is set by default, which is the default Bash behavior in versions through 4.2.",
  },

  {
    "option": "direxpand",
    "definition": "If set, Bash replaces directory names with the results of word expansion when performing filename completion. This changes the contents of the readline editing buffer. If not set, Bash attempts to preserve what the user typed.",
  },

  {
    "option": "dirspell",
    "definition": "If set, Bash attempts spelling correction on directory names during word completion if the directory name initially supplied does not exist.",
  },

  {
    "option": "dotglob",
    "definition": "If set, Bash includes filenames beginning with a `.` in the results of filename expansion.",
  },

  {
    "option": "execfail",
    "definition": "If this is set, a non-interactive shell will not exit if it cannot execute the file specified as an argument to the exec builtin command. An interactive shell does not exit if exec fails.",
  },

  {
    "option": "expand_aliases",
    "definition": "If set, aliases are expanded as described below under Aliases, Aliases. This option is enabled by default for interactive shells.",
  },

  {
    "option": "extdebug",
    "definition": "If set at shell invocation, arrange to execute the debugger profile before the shell starts, identical to the --debugger option.",
  },

  {
    "option": "extquote",
    "definition": `If set, $'string' and $"string" quoting is performed within \${parameter} expansions enclosed in double quotes. This option is enabled by default.`,
  },

  {
    "option": "failglob",
    "definition": "If set, patterns which fail to match filenames during filename expansion result in an expansion error.",
  },

  {
    "option": "force_fignore",
    "definition": "If set, the suffixes specified by the FIGNORE shell variable cause words to be ignored when performing word completion even if the ignored words are the only possible completions. See Bash Variables, for a description of FIGNORE. This option is enabled by default.",
  },

  {
    "option": "globasciiranges",
    "definition": "If set, range expressions used in pattern matching bracket expressions (see Pattern Matching) behave as if in the traditional C locale when performing comparisons. That is, the current locale's collating sequence is not taken into account, so `b` will not collate between `A` and `B`, and upper-case and lower-case ASCII characters will collate together.",
  },

  {
    "option": "globstar",
    "definition": "If set, the pattern `**` used in a filename expansion context will match all files and zero or more directories and subdirectories. If the pattern is followed by a `/`, only directories and subdirectories match.",
  },

  {
    "option": "gnu_errfmt",
    "definition": "If set, shell error messages are written in the standard GNU error message format.",
  },

  {
    "option": "histappend",
    "definition": "If set, the history list is appended to the file named by the value of the HISTFILE variable when the shell exits, rather than overwriting the file.",
  },

  {
    "option": "histreedit",
    "definition": "If set, and Readline is being used, a user is given the opportunity to re-edit a failed history substitution.",
  },

  {
    "option": "histverify",
    "definition": "If set, and Readline is being used, the results of history substitution are not immediately passed to the shell parser. Instead, the resulting line is loaded into the Readline editing buffer, allowing further modification."
  },

  {
    "option": "hostcomplete",
    "definition": "If set, and Readline is being used, Bash will attempt to perform hostname completion when a word containing a `@` is being completed (see Commands For Completion). This option is enabled by default.",
  },

  {
    "option": "huponexit",
    "definition": "If set, Bash will send SIGHUP to all jobs when an interactive login shell exits (see Signals).",
  },

  {
    "option": "inherit_errexit",
    "definition": "If set, command substitution inherits the value of the errexit option, instead of unsetting it in the subshell environment. This option is enabled when POSIX mode is enabled."
  },

  {
    "option": "interactive_comments",
    "definition": "Allow a word beginning with `#` to cause that word and all remaining characters on that line to be ignored in an interactive shell. This option is enabled by default."
  },

  {
    "option": "lastpipe",
    "definition": "If set, and job control is not active, the shell runs the last command of a pipeline not executed in the background in the current shell environment.",
  },

  {
    "option": "lithist",
    "definition": "If enabled, and the cmdhist option is enabled, multi-line commands are saved to the history with embedded newlines rather than using semicolon separators where possible.",
  },

  {
    "option": "login_shell",
    "definition": "The shell sets this option if it is started as a login shell (see Invoking Bash). The value may not be changed.",
  },

  {
    "option": "mailwarn",
    "definition": `If set, and a file that Bash is checking for mail has been accessed since the last time it was checked, the message "The mail in mailfile has been read" is displayed.`,
  },

  {
    "option": "no_empty_cmd_completion",
    "definition": "If set, and Readline is being used, Bash will not attempt to search the PATH for possible completions when completion is attempted on an empty line.",
  },

  {
    "option": "nocaseglob",
    "definition": "If set, Bash matches filenames in a case-insensitive fashion when performing filename expansion.",
  },

  {
    "option": "nocasematch",
    "definition": "If set, Bash matches patterns in a case-insensitive fashion when performing matching while executing case or [[ conditional commands, when performing pattern substitution word expansions, or when filtering possible completions as part of programmable completion.",
  },

  {
    "option": "nullglob",
    "definition": "If set, Bash allows filename patterns which match no files to expand to a null string, rather than themselves.",
  },

  {
    "option": "progcomp",
    "definition": "If set, the programmable completion facilities (see Programmable Completion) are enabled. This option is enabled by default.",
  },

  {
    "option": "promptvars",
    "definition": "If set, prompt strings undergo parameter expansion, command substitution, arithmetic expansion, and quote removal after being expanded as described below (see Controlling the Prompt). This option is enabled by default.",
  },

  {
    "option": "restricted_shell",
    "definition": "The shell sets this option if it is started in restricted mode (see The Restricted Shell). The value may not be changed. This is not reset when the startup files are executed, allowing the startup files to discover whether or not a shell is restricted.",
  },

  {
    "option": "shift_verbose",
    "definition": "If this is set, the shift builtin prints an error message when the shift count exceeds the number of positional parameters.",
  },

  {
    "option": "sourcepath",
    "definition": "If set, the source builtin uses the value of PATH to find the directory containing the file supplied as an argument. This option is enabled by default.",
  },

  {
    "option": "xpg_echo",
    "definition": "If set, the echo builtin expands backslash-escape sequences by default.",
  },



]
