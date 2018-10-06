# vscode-shell-syntax
[![GitHub issues](https://img.shields.io/github/issues/dunstontc/vscode-shell-syntax.svg)](https://github.com/dunstontc/vscode-shell-syntax/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dunstontc/vscode-shell-syntax/blob/master/LICENSE) 



## Resources
- [kkos/oniguruma/doc/RE](https://github.com/kkos/oniguruma/blob/master/doc/RE)
- [Scope Naming](https://www.sublimetext.com/docs/3/scope_naming.html)
- [vscode-textmate](https://github.com/Microsoft/vscode-textmate)


## Language
- [Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html)
- [The Z Shell Manual](http://zsh.sourceforge.net/Doc/Release/zsh_toc.html)
- [Shell Command Language](http://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html)

- [Microsoft/vscode/shellscript](https://github.com/Microsoft/vscode/tree/master/extensions/shellscript)


## [License](https://github.com/dunstontc/vscode-shell-syntax/blob/master/LICENSE)


## Bash

ARITHMETIC EVALUATION
       The  shell allows arithmetic expressions to be evaluated, under certain
       circumstances (see the let and declare builtin commands and  Arithmetic
       Expansion).   Evaluation  is done in fixed-width integers with no check
       for overflow, though division by 0 is trapped and flagged as an  error.
       The  operators  and their precedence, associativity, and values are the
       same as in the C language.  The following list of operators is  grouped
       into  levels  of  equal-precedence operators.  The levels are listed in
       order of decreasing precedence.

       id++ id--
              variable post-increment and post-decrement
       ++id --id
              variable pre-increment and pre-decrement
       - +    unary minus and plus
       ! ~    logical and bitwise negation
       **     exponentiation
       * / %  multiplication, division, remainder
       + -    addition, subtraction
       << >>  left and right bitwise shifts
       <= >= < >
              comparison
       == !=  equality and inequality
       &      bitwise AND
       ^      bitwise exclusive OR
       |      bitwise OR
       &&     logical AND
       ||     logical OR
       expr?expr:expr
              conditional operator
       = *= /= %= += -= <<= >>= &= ^= |=
              assignment
       expr1 , expr2
              comma


PROMPTING
       When executing interactively, bash displays the primary prompt PS1 when
       it is ready to read a command, and the secondary  prompt  PS2  when  it
       needs  more  input  to  complete  a  command.  Bash allows these prompt
       strings to be customized by inserting  a  number  of  backslash-escaped
       special characters that are decoded as follows:
              \a     an ASCII bell character (07)
              \d     the  date  in "Weekday Month Date" format (e.g., "Tue May
                     26")
              \D{format}
                     the format is passed to strftime(3)  and  the  result  is
                     inserted  into the prompt string; an empty format results
                     in a locale-specific time representation.  The braces are
                     required
              \e     an ASCII escape character (033)
              \h     the hostname up to the first `.'
              \H     the hostname
              \j     the number of jobs currently managed by the shell
              \l     the basename of the shell's terminal device name
              \n     newline
              \r     carriage return
              \s     the  name  of  the shell, the basename of `$0` (the portion
                     following the final slash)
              \t     the current time in 24-hour HH:MM:SS format
              \T     the current time in 12-hour HH:MM:SS format
              \@     the current time in 12-hour am/pm format
              \A     the current time in 24-hour HH:MM format
              \u     the username of the current user
              \v     the version of bash (e.g., 2.00)
              \V     the release of bash, version + patch level (e.g., 2.00.0)
              \w     the current working  directory,  with  `$HOME`  abbreviated
                     with  a tilde (uses the value of the PROMPT_DIRTRIM vari‐
                     able)
              \W     the basename of the current working directory, with `$HOME`
                     abbreviated with a tilde
              \!     the history number of this command
              \#     the command number of this command
              \$     if the effective UID is 0, a #, otherwise a `$`
              \nnn   the character corresponding to the octal number nnn
              \\     a backslash
              \[     begin  a sequence of non-printing characters, which could
                     be used to embed a terminal  control  sequence  into  the
                     prompt
              \]     end a sequence of non-printing characters


### Readline

Readline Variables
  Readline has variables that can be used to further customize its behav‐
  ior.  A variable may be set in the inputrc file with a statement of the
  form

  set variable-name value

  Except where noted, readline variables can take the values  On  or  Off
  (without  regard  to  case).   Unrecognized variable names are ignored.
  When a variable value is read, empty or null values, "on"  (case-insen‐
  sitive), and "1" are equivalent to On.  All other values are equivalent
  to `Off`.  The variables and their default values are:

  bell-style (audible)
        Controls what happens when readline wants to ring the terminal bell. If set to none, readline never rings the bell.  If set to visible, readline uses a visible bell if one is  available.  If set to audible, readline attempts to ring the terminal's bell.
  bind-tty-special-chars (On)
        If set to `On`, readline attempts to bind the control characters treated specially by the kernel's terminal driver to their readline equivalents.
  comment-begin (`#`)
        The string that is inserted when the readline insert-comment command is executed.  This command is bound to `M-#` in `emacs` mode and to `#` in `vi` command mode.
  completion-ignore-case (Off)
        If set to On, readline performs filename matching and completion in a case-insensitive fashion.
  completion-prefix-display-length (0)
        The length in characters of the common prefix of a list of possible completions that is displayed without modification.  When set to a value greater than zero, common prefixes longer than this value are replaced with an ellipsis when displaying possible completions.
  completion-query-items (100)
        This determines when the user is queried about viewing the  number of possible completions generated by the possible-completions command.  It may be set to any integer value greater than or equal to zero.  If the number of possible completions is greater than or equal to the value of this variable, the user is asked whether or not he wishes to view them; otherwise they are simply listed on the terminal.
  convert-meta (On)
        If set to On, readline will convert characters with the eighth bit set to an ASCII key sequence by stripping the eighth bit and prefixing an escape character (in effect, using escape as the meta prefix).
  disable-completion (Off)
        If set to On, readline will inhibit word completion.  Completion characters will be inserted into the line as if they had been mapped to self-insert.
  editing-mode (emacs)
        Controls whether readline begins with a set of key bindings similar to emacs or vi.  `editing-mode` can be set to either `emacs` or `vi`.
  echo-control-characters (On)
        When set to `On`, on operating systems that indicate they support it, readline echoes a character corresponding to a signal generated from the keyboard.
  enable-keypad (Off)
        When set to `On`, readline will try to enable the application keypad when it is called.  Some systems need this to enable the arrow keys.
  enable-meta-key (On)
        When set to `On`, readline will try to enable any meta modifier key the terminal claims to support when it is called.  On many terminals, the meta key is used to send eight-bit characters.
  expand-tilde (Off)
        If set to On, tilde expansion is performed when readline attempts word completion.
  history-preserve-point (Off)
        If set to on, the history code attempts to place point at the same location on each history line retrieved with previous-history or next-history.
  history-size (0)
        Set the maximum number of history entries saved in the history list.  If set to zero, the number of entries in the history list is not limited.
  horizontal-scroll-mode (Off)
        When set to On, makes readline use a single line for display, scrolling the input horizontally on a single screen line when it becomes longer than the screen width rather than wrapping to a new line.
  input-meta (Off)
        If set to On, readline will enable eight-bit input (that is, it will not strip the high bit from the characters it reads), regardless of what the terminal claims it can support.  The name meta-flag is a synonym for this variable.
  isearch-terminators (`C-[C-J`)
        The string of characters that should terminate an incremental search without subsequently executing the character as a command.  If this variable has not been given a value, the characters `ESC` and `C-J` will terminate an incremental search.
  keymap (emacs)
        Set  the current readline keymap.  The set of valid keymap names is `emacs`, `emacs-standard`, `emacs-meta`,  `emacs-ctlx`,  `vi`,  `vi-command`,  and  `vi-insert`.  `vi` is equivalent to `vi-command`; `emacs` is equivalent to `emacs-standard`.  The default value is `emacs`;  the value of editing-mode also affects the default keymap.
  mark-directories (On)
        If set to On, completed directory names have a slash appended.
  mark-modified-lines (Off)
        If  set  to  On,  history lines that have been modified are displayed with a preceding asterisk (`*`),
  mark-symlinked-directories (Off)
        If set to On, completed names which are symbolic links to directories have a slash appended (subject to the value of mark-directories).
  match-hidden-files (On)
        This variable, when set to On, causes readline to match files whose names begin with a  `.' (hidden files) when performing filename completion, unless the leading `.' is supplied  by  the user in the filename to be completed.
  output-meta (Off)
        If  set  to On, readline will display characters with the eighth bit set directly rather than as a meta-prefixed escape sequence.
  page-completions (On)
        If set to On, readline uses an internal more-like pager to display a screenful of possible completions at a time.
  print-completions-horizontally (Off)
        If  set  to  On,  readline will display completions with matches sorted horizontally in alphabetical order, rather than down  the screen.
  revert-all-at-newline (Off)
        If  set  to  on, readline will undo all changes to history lines before returning when accept-line is executed.  By default, history lines may be modified and retain individual undo lists across calls to readline.
  show-all-if-ambiguous (Off)
        This alters the default behavior of the completion functions. If set to on, words which have more than one possible completion cause the matches to be listed immediately instead of ringing the bell.
  show-all-if-unmodified (Off)
        This  alters the default behavior of the completion functions in a fashion similar to show-all-if-ambiguous.  If set to on, words which  have more than one possible completion without any possible partial completion (the possible completions don't share a common  prefix)  cause the matches to be listed immediately instead of ringing the bell.
  skip-completed-text (Off)
        If set to `On`, this alters the default completion behavior when inserting a single match into the line.  It's only active when performing completion in the middle of a word.  If enabled, readline does not insert characters from the completion that match characters after point in the word being completed, so portions of the word following the cursor are not duplicated.
  visible-stats (Off)
        If set to `On`, a character denoting a file's type as reported by stat(2) is appended to the filename when listing possible completions.

Commands for Moving
    beginning-of-line (C-a)
          Move to the start of the current line.
    end-of-line (C-e)
          Move to the end of the line.
    forward-char (C-f)
          Move forward a character.
    backward-char (C-b)
          Move back a character.
    forward-word (M-f)
          Move forward to the end of the next word.  Words are composed of alphanumeric characters (letters and digits).
    backward-word (M-b)
          Move  back  to the start of the current or previous word.  Words
          are composed of alphanumeric characters (letters and digits).
    shell-forward-word
          Move forward to the end of the next word.  Words are delimited by non-quoted shell metacharacters.
    shell-backward-word
          Move  back  to the start of the current or previous word.  Words are delimited by non-quoted shell metacharacters.
    clear-screen (C-l)
          Clear the screen leaving the current line at the top of the screen.  With an argument, refresh the current line without clearing the screen.
    redraw-current-line
          Refresh the current line.

